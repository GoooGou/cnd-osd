import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import previewBg from "@/imports/image.png"

type OSDItemType = "text" | "time" | "image" | "h5"

interface OSDItem {
  id: string
  type: OSDItemType
  label: string
  enabled: boolean
  content: string      // text / h5-url
  x: number
  y: number
  fontSize: number
  scale: number
  color: string
  imageUrl?: string
}

interface GalleryImage {
  id: string
  url: string
  name: string
}

interface UploadError {
  name: string
  reason: string
}

const TYPE_COLORS: Record<OSDItemType, string> = {
  text:  "#11B2FF",
  time:  "#00BE63",
  image: "#FF6B35",
  h5:    "#A855F7",
}

const TYPE_LABELS: Record<OSDItemType, string> = {
  text: "Text", time: "Time", image: "Image", h5: "H5 Link",
}

const ICON_TEXT = (
  <svg viewBox="0 0 16 16" fill="none" className="size-4">
    <path d="M2 3h12M8 3v10M5 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const ICON_TIME = (
  <svg viewBox="0 0 16 16" fill="none" className="size-4">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const ICON_IMAGE = (
  <svg viewBox="0 0 16 16" fill="none" className="size-4">
    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5.5" cy="6.5" r="1" fill="currentColor" />
    <path d="M2 11l3.5-3 3 3 2-2 3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ICON_H5 = (
  <svg viewBox="0 0 16 16" fill="none" className="size-4">
    <path d="M2 4.5h12M2 8h12M4 11.5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="13" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M11.5 11.5H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)
const TYPE_ICONS: Record<OSDItemType, React.ReactNode> = {
  text: ICON_TEXT, time: ICON_TIME, image: ICON_IMAGE, h5: ICON_H5,
}

const PRESET_GRID: [string, string, number, number][] = [
  ["Top Left",    "↖", 10, 10], ["Top",    "↑", 50, 10], ["Top Right",    "↗", 90, 10],
  ["Left",        "←", 10, 50], ["Center", "⊙", 50, 50], ["Right",        "→", 90, 50],
  ["Bottom Left", "↙", 10, 90], ["Bottom", "↓", 50, 90], ["Bottom Right", "↘", 90, 90],
]

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"]
const MAX_SIZE_MB = 5

// ─── small helpers ────────────────────────────────────────────────────────────

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle} role="switch" aria-checked={enabled}
      className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none"
      style={{ backgroundColor: enabled ? "#11B2FF" : "#4b4b4b" }}
    >
      <motion.span layout className="absolute size-3.5 rounded-full bg-white shadow-sm"
        animate={{ x: enabled ? 18 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    </button>
  )
}

function LiveClock({ style }: { style?: React.CSSProperties }) {
  const [t, setT] = useState(() => new Date())
  useEffect(() => { const id = setInterval(() => setT(new Date()), 1000); return () => clearInterval(id) }, [])
  return <span className="font-['Quicksand:Bold',sans-serif] tabular-nums" style={style}>{t.toLocaleTimeString()}</span>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-['Quicksand:Bold',sans-serif] text-[10px] text-[#8e8e91] uppercase tracking-wide mb-1.5">{label}</label>
      {children}
    </div>
  )
}

// ─── canvas item renderer ─────────────────────────────────────────────────────

function ItemContent({ item }: { item: OSDItem }) {
  const fs = item.fontSize * item.scale
  const s: React.CSSProperties = { fontSize: fs, color: item.color }
  if (item.type === "text")
    return <span className="font-['Quicksand:Bold',sans-serif] drop-shadow-[0_1px_4px_rgba(0,0,0,.9)] whitespace-nowrap" style={s}>{item.content || "Sample Text"}</span>
  if (item.type === "time")
    return <LiveClock style={{ ...s, filter: "drop-shadow(0 1px 4px rgba(0,0,0,.9))" }} />
  if (item.type === "image" && item.imageUrl)
    return <img src={item.imageUrl} alt="" style={{ width: 80 * item.scale, height: 50 * item.scale, objectFit: "contain" }} className="drop-shadow-[0_2px_6px_rgba(0,0,0,.9)]" />
  if (item.type === "h5") {
    const display = item.content ? item.content.replace(/^https?:\/\//, "") : "example.com"
    return (
      <div className="flex items-center gap-1 rounded-md border border-[#A855F7]/60 bg-[#A855F7]/20 px-2 py-[3px] whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,.9)]" style={{ fontSize: (item.fontSize - 3) * item.scale }}>
        <svg viewBox="0 0 12 12" fill="none" style={{ width: 10 * item.scale, height: 10 * item.scale, flexShrink: 0 }}>
          <path d="M6 1.5A4.5 4.5 0 1 1 6 10.5M6 1.5A4.5 4.5 0 0 0 6 10.5M6 1.5v9M1.5 6h9M2 3.5C3 4.5 4.5 5 6 5s3-.5 4-1.5M2 8.5C3 7.5 4.5 7 6 7s3 .5 4 1.5" stroke="#A855F7" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <span className="font-['Inter:Regular',sans-serif]" style={{ color: "#e2c8ff" }}>{display}</span>
      </div>
    )
  }
  return null
}

// ─── interactive canvas ───────────────────────────────────────────────────────

function OSDCanvas({ items, enabled, selectedId, onSelect, onMove, onResize }: {
  items: OSDItem[]
  enabled: boolean
  selectedId: string | null
  onSelect: (id: string) => void
  onMove: (id: string, x: number, y: number) => void
  onResize: (id: string, s: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const drag   = useRef<{ id: string; sx: number; sy: number; ox: number; oy: number } | null>(null)
  const resize = useRef<{ id: string; sx: number; sy: number; os: number } | null>(null)

  const onItemDown = (e: React.PointerEvent, item: OSDItem) => {
    e.stopPropagation()
    onSelect(item.id)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    drag.current = { id: item.id, sx: e.clientX, sy: e.clientY, ox: item.x, oy: item.y }
  }

  const onResizeDown = (e: React.PointerEvent, item: OSDItem) => {
    e.stopPropagation()
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    resize.current = { id: item.id, sx: e.clientX, sy: e.clientY, os: item.scale }
  }

  const onMove_ = (e: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    if (drag.current) {
      const dx = ((e.clientX - drag.current.sx) / rect.width)  * 100
      const dy = ((e.clientY - drag.current.sy) / rect.height) * 100
      onMove(drag.current.id,
        Math.max(2, Math.min(98, drag.current.ox + dx)),
        Math.max(2, Math.min(98, drag.current.oy + dy)))
    }
    if (resize.current) {
      const d = (e.clientX - resize.current.sx + e.clientY - resize.current.sy) / 120
      onResize(resize.current.id, Math.max(0.3, Math.min(4, resize.current.os + d)))
    }
  }

  const onUp = () => { drag.current = null; resize.current = null }

  return (
    <div ref={ref}
      className="relative w-full rounded-xl overflow-hidden select-none"
      style={{ aspectRatio: "16/9" }}
      onPointerMove={onMove_} onPointerUp={onUp}
      onClick={() => onSelect("")}
    >
      {/* Background — imported preview image */}
      <img src={previewBg} alt="" className="absolute inset-0 size-full object-cover" draggable={false} />
      {/* slight darken so OSD items read well */}
      <div className="absolute inset-0 bg-black/30" />

      {/* subtle rule grid */}
      {enabled && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <div className="absolute left-1/3 top-0 bottom-0 border-l border-white" />
          <div className="absolute left-2/3 top-0 bottom-0 border-l border-white" />
          <div className="absolute top-1/3 left-0 right-0 border-t border-white" />
          <div className="absolute top-2/3 left-0 right-0 border-t border-white" />
        </div>
      )}

      <AnimatePresence>
        {enabled && items.filter(i => i.enabled).map(item => {
          const sel = item.id === selectedId
          const col = TYPE_COLORS[item.type]
          return (
            <motion.div key={item.id}
              className="absolute"
              style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%,-50%)" }}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.15 }}
            >
              {/* ── selection highlight ── */}
              {sel && (
                <>
                  {/* glow halo */}
                  <div className="absolute pointer-events-none rounded-lg"
                    style={{
                      inset: "-8px",
                      boxShadow: `0 0 0 2px ${col}, 0 0 16px 4px ${col}55`,
                      borderRadius: 8,
                    }}
                  />
                  {/* tinted fill */}
                  <div className="absolute pointer-events-none rounded-lg"
                    style={{ inset: "-8px", backgroundColor: col + "18", borderRadius: 8 }}
                  />
                  {/* type label chip above */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-px flex items-center gap-1"
                    style={{ backgroundColor: col, fontSize: 9 }}
                  >
                    <span className="font-['Quicksand:Bold',sans-serif] text-white">{item.label}</span>
                  </div>
                </>
              )}

              {/* drag zone */}
              <div className="cursor-move" style={{ touchAction: "none" }} onPointerDown={e => onItemDown(e, item)}>
                <ItemContent item={item} />
              </div>

              {/* resize handle */}
              {sel && (
                <div
                  className="absolute -bottom-2 -right-2 size-3 rounded-sm cursor-se-resize border border-white/40"
                  style={{ backgroundColor: col, touchAction: "none" }}
                  onPointerDown={e => onResizeDown(e, item)}
                />
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>

      {!enabled && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="font-['Quicksand:Bold',sans-serif] text-[#8e8e91] text-[10px] tracking-widest uppercase">OSD Disabled</span>
        </div>
      )}
    </div>
  )
}

// ─── upload-error toast ───────────────────────────────────────────────────────

function UploadErrorToast({ errors, onDismiss }: { errors: UploadError[]; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 4000)
    return () => clearTimeout(t)
  }, [onDismiss])
  return (
    <motion.div
      className="absolute bottom-4 left-4 right-4 z-10 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#2a1515] border border-red-500/40 rounded-xl px-4 py-3 flex items-start gap-3">
        <div className="shrink-0 mt-0.5">
          <svg viewBox="0 0 16 16" fill="none" className="size-4 text-red-400">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Quicksand:Bold',sans-serif] text-red-400 text-[12px] mb-0.5">Upload failed</p>
          {errors.map((e, i) => (
            <p key={i} className="font-['Quicksand:Regular',sans-serif] text-[11px] text-red-300/80 truncate">
              <span className="text-white/60">{e.name}</span> — {e.reason}
            </p>
          ))}
        </div>
        <button onClick={onDismiss} className="shrink-0 text-red-400/60 hover:text-red-400 transition-colors">
          <svg viewBox="0 0 12 12" fill="none" className="size-3">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

// ─── state & IDs ─────────────────────────────────────────────────────────────

let uid = 0
const genId = () => `osd-${Date.now()}-${++uid}`

const INIT: OSDItem[] = [
  { id: genId(), type: "time",  label: "Timestamp",    enabled: true, content: "",             x: 85, y: 8,  fontSize: 16, scale: 1, color: "#00BE63" },
  { id: genId(), type: "text",  label: "Channel Name", enabled: true, content: "HERO ESPORTS", x: 15, y: 8,  fontSize: 18, scale: 1, color: "#FFFFFF" },
]

// ─── main drawer ──────────────────────────────────────────────────────────────

export default function OSDDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [osdEnabled,  setOsdEnabled]  = useState(true)
  const [items,       setItems]       = useState<OSDItem[]>(INIT)
  const [selectedId,  setSelectedId]  = useState<string | null>(INIT[0].id)
  const [gallery,     setGallery]     = useState<GalleryImage[]>([])
  const [showGallery, setShowGallery] = useState(false)
  const [tab,         setTab]         = useState<"list" | "props">("list")
  const [uploadErrs,  setUploadErrs]  = useState<UploadError[]>([])
  const fileRef  = useRef<HTMLInputElement>(null)
  const gallRef  = useRef<HTMLInputElement>(null)

  const sel = items.find(i => i.id === selectedId) ?? null

  const update = useCallback(<K extends keyof OSDItem>(id: string, k: K, v: OSDItem[K]) => {
    setItems(p => p.map(i => i.id === id ? { ...i, [k]: v } : i))
  }, [])

  const addItem = (type: OSDItemType) => {
    const item: OSDItem = {
      id: genId(), type,
      label:   type === "text" ? "New Text" : type === "time" ? "Timestamp" : type === "image" ? "Logo" : "H5 Link",
      enabled: true,
      content: type === "text" ? "New Text" : type === "h5" ? "https://" : "",
      x: 50, y: 50, fontSize: 16, scale: 1, color: TYPE_COLORS[type],
    }
    setItems(p => [...p, item])
    setSelectedId(item.id)
    setTab("props")
  }

  const removeItem = (id: string) => {
    setItems(p => p.filter(i => i.id !== id))
    if (selectedId === id) setSelectedId(null)
  }

  // ── upload with validation ──
  const handleUpload = (files: FileList, forItemId?: string) => {
    const errs: UploadError[] = []
    const valid: GalleryImage[] = []
    Array.from(files).forEach(f => {
      if (!ALLOWED_TYPES.includes(f.type)) {
        errs.push({ name: f.name, reason: "unsupported format" })
        return
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        errs.push({ name: f.name, reason: `exceeds ${MAX_SIZE_MB} MB limit` })
        return
      }
      valid.push({ id: genId(), url: URL.createObjectURL(f), name: f.name })
    })
    if (errs.length) setUploadErrs(errs)
    if (!valid.length) return
    setGallery(p => [...p, ...valid])
    // auto-assign first valid image to current image item
    if (forItemId) update(forItemId, "imageUrl", valid[0].url)
  }

  const applyPreset = (x: number, y: number) => {
    if (selectedId) setItems(p => p.map(i => i.id === selectedId ? { ...i, x, y } : i))
  }

  const selectAndProps = (id: string) => { setSelectedId(id); setTab("props") }

  // url validation hint
  const urlValid = (v: string) => !v || v === "https://" || /^https?:\/\/.+\..+/.test(v)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col bg-[#1e1e1e] border-l border-[#575757] shadow-2xl"
            style={{ width: 500 }}
            initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 500 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* ── header ── */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#575757] bg-[#282828] shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(255,255,255,0.1)] border border-[#333] rounded-lg p-1.5">
                  <svg viewBox="0 0 36 36" fill="none" className="size-5 text-white">
                    <path d="M9 9h18v15H9zM13 24v3M23 24v3M9 18h3M24 18h3M13.5 9V6M22.5 9V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.75 10.5h3M14.25 9v3M21 12.75h4.5M23.25 10.5v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Quicksand:Bold',sans-serif] text-white text-[14px] leading-5">OSD Overlay</p>
                  <p className="font-['Quicksand:Regular',sans-serif] text-[#8e8e91] text-[11px]">On-Screen Display</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-['Quicksand:Regular',sans-serif] text-xs text-[#8e8e91]">{osdEnabled ? "ON" : "OFF"}</span>
                <Toggle enabled={osdEnabled} onToggle={() => setOsdEnabled(v => !v)} />
                <button onClick={onClose} className="size-7 flex items-center justify-center rounded hover:bg-[#3f3f3f] text-[#8e8e91] hover:text-white transition-colors">
                  <svg viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── canvas ── */}
            <div className="px-4 py-3 border-b border-[#575757] shrink-0 relative">
              <div className="flex items-center justify-between mb-2">
                <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757]">
                  Canvas — drag · corner handle to scale
                </p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-['Quicksand:Bold',sans-serif] ${osdEnabled ? "bg-[#00BE63]/20 text-[#00BE63]" : "bg-[#575757]/30 text-[#575757]"}`}>
                  {osdEnabled ? "LIVE" : "DISABLED"}
                </span>
              </div>
              <OSDCanvas
                items={items} enabled={osdEnabled} selectedId={selectedId}
                onSelect={id => setSelectedId(id || null)}
                onMove={(id, x, y) => { update(id, "x", x); update(id, "y", y) }}
                onResize={(id, s) => update(id, "scale", s)}
              />
              {/* upload error toast — floats over canvas */}
              <AnimatePresence>
                {uploadErrs.length > 0 && (
                  <UploadErrorToast errors={uploadErrs} onDismiss={() => setUploadErrs([])} />
                )}
              </AnimatePresence>
            </div>

            {/* ── tabs ── */}
            <div className="flex border-b border-[#575757] shrink-0 bg-[#222]">
              {(["list", "props"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={`flex-1 h-9 font-['Quicksand:Bold',sans-serif] text-[13px] transition-colors ${
                    tab === t ? "text-[#11B2FF] border-b-2 border-[#11B2FF]" : "text-[#8e8e91] hover:text-white"
                  }`}
                >
                  {t === "list" ? "Overlay List" : "Properties"}
                </button>
              ))}
            </div>

            {/* ── body ── */}
            <div className="flex-1 overflow-y-auto">

              {/* ══ LIST ══ */}
              {tab === "list" && (
                <div className="p-3 flex flex-col gap-1.5">
                  <AnimatePresence>
                    {items.map(item => {
                      const active = item.id === selectedId
                      const col = TYPE_COLORS[item.type]
                      return (
                        <motion.div key={item.id} layout
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 20 }}
                          onClick={() => selectAndProps(item.id)}
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 cursor-pointer transition-all"
                          style={active ? {
                            background: `linear-gradient(135deg, ${col}18 0%, ${col}08 100%)`,
                            border: `1.5px solid ${col}80`,
                            boxShadow: `0 0 12px ${col}22`,
                          } : {
                            background: "#282828",
                            border: "1.5px solid transparent",
                          }}
                        >
                          {/* icon */}
                          <div className="size-8 rounded-lg flex items-center justify-center shrink-0 transition-all"
                            style={{
                              backgroundColor: active ? col + "33" : col + "18",
                              color: col,
                              boxShadow: active ? `0 0 8px ${col}55` : "none",
                            }}
                          >
                            {TYPE_ICONS[item.type]}
                          </div>

                          {/* name + position */}
                          <div className="flex-1 min-w-0">
                            <p className="font-['Quicksand:Bold',sans-serif] text-sm text-white truncate leading-5">
                              {item.label}
                            </p>
                            <p className="font-['Quicksand:Regular',sans-serif] text-[11px] text-[#8e8e91] leading-4 tabular-nums">
                              <span style={{ color: col }}>{TYPE_LABELS[item.type]}</span>
                              {" · "}{Math.round(item.x)}%, {Math.round(item.y)}%
                              {" · "}{Math.round(item.scale * 100)}%
                            </p>
                          </div>

                          {/* controls */}
                          <div className="flex items-center gap-1.5 shrink-0" onClick={e => e.stopPropagation()}>
                            <Toggle enabled={item.enabled} onToggle={() => update(item.id, "enabled", !item.enabled)} />
                            <button onClick={() => removeItem(item.id)}
                              className="size-6 flex items-center justify-center rounded hover:bg-[#575757] text-[#575757] hover:text-red-400 transition-colors">
                              <svg viewBox="0 0 14 14" fill="none" className="size-3.5">
                                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>

                  {items.length === 0 && (
                    <div className="py-10 flex flex-col items-center text-[#575757]">
                      <svg viewBox="0 0 40 40" fill="none" className="size-9 mb-2 opacity-40">
                        <rect x="4" y="6" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10 17h10M10 21h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <p className="font-['Quicksand:Regular',sans-serif] text-sm">No overlays yet</p>
                    </div>
                  )}

                  {/* add buttons */}
                  <div className="mt-2 pt-3 border-t border-[#2d2d2d]">
                    <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757] mb-2.5">Add Overlay</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {(["text", "time", "image", "h5"] as OSDItemType[]).map(type => (
                        <button key={type} onClick={() => addItem(type)}
                          className="flex flex-col items-center gap-1.5 py-2.5 rounded-xl bg-[#282828] hover:bg-[#3f3f3f] border border-[#3f3f3f] hover:border-[#575757] transition-colors">
                          <span style={{ color: TYPE_COLORS[type] }}>{TYPE_ICONS[type]}</span>
                          <span className="font-['Quicksand:Bold',sans-serif] text-[11px] text-white">{TYPE_LABELS[type]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ══ PROPERTIES ══ */}
              {tab === "props" && (
                <div className="p-4">
                  {sel ? (
                    <div className="flex flex-col gap-4">
                      {/* header row */}
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: TYPE_COLORS[sel.type] + "22", color: TYPE_COLORS[sel.type] }}>
                          {TYPE_ICONS[sel.type]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Quicksand:Bold',sans-serif] text-sm text-white">{sel.label}</p>
                          <p className="font-['Quicksand:Regular',sans-serif] text-xs text-[#8e8e91]">
                            {TYPE_LABELS[sel.type]} · {Math.round(sel.x)}%, {Math.round(sel.y)}%
                          </p>
                        </div>
                        <Toggle enabled={sel.enabled} onToggle={() => update(sel.id, "enabled", !sel.enabled)} />
                      </div>

                      <div className="h-px bg-[#2d2d2d]" />

                      {/* label */}
                      <Field label="Label">
                        <input className="w-full h-8 rounded-lg bg-[#282828] border border-[#3f3f3f] px-3 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors"
                          value={sel.label}
                          onChange={e => update(sel.id, "label", e.target.value)}
                        />
                      </Field>

                      {/* text content */}
                      {sel.type === "text" && (
                        <Field label="Text Content">
                          <textarea rows={2}
                            className="w-full rounded-lg bg-[#282828] border border-[#3f3f3f] px-3 py-2 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors resize-none"
                            value={sel.content}
                            onChange={e => update(sel.id, "content", e.target.value)}
                          />
                        </Field>
                      )}

                      {/* H5 URL input */}
                      {sel.type === "h5" && (
                        <Field label="H5 Link URL">
                          <div className="relative">
                            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg viewBox="0 0 14 14" fill="none" className="size-3.5 text-[#A855F7]">
                                <path d="M7 1.5A5.5 5.5 0 1 1 7 12.5M7 1.5A5.5 5.5 0 0 0 7 12.5M7 1.5v11M1.5 7h11M2.3 4.2C3.5 5.1 5.2 5.7 7 5.7s3.5-.6 4.7-1.5M2.3 9.8C3.5 8.9 5.2 8.3 7 8.3s3.5.6 4.7 1.5"
                                  stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                              </svg>
                            </div>
                            <input
                              type="url"
                              placeholder="https://example.com/overlay"
                              className={`w-full h-8 rounded-lg bg-[#282828] border pl-8 pr-3 text-sm font-['Quicksand:Regular',sans-serif] focus:outline-none transition-colors ${
                                urlValid(sel.content)
                                  ? "border-[#3f3f3f] text-white focus:border-[#A855F7]"
                                  : "border-red-500/60 text-red-300 focus:border-red-500"
                              }`}
                              value={sel.content}
                              onChange={e => update(sel.id, "content", e.target.value)}
                            />
                          </div>
                          {!urlValid(sel.content) && (
                            <p className="mt-1 font-['Quicksand:Regular',sans-serif] text-[11px] text-red-400 flex items-center gap-1">
                              <svg viewBox="0 0 12 12" fill="none" className="size-3 shrink-0">
                                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M6 3.5V6.5M6 8.5v.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                              </svg>
                              Enter a valid URL starting with http:// or https://
                            </p>
                          )}
                        </Field>
                      )}

                      {/* image picker */}
                      {sel.type === "image" && (
                        <Field label="Image">
                          <input ref={fileRef} type="file" accept={ALLOWED_TYPES.join(",")} multiple className="hidden"
                            onChange={e => { if (e.target.files) { handleUpload(e.target.files, sel.id); e.target.value = "" } }}
                          />
                          {sel.imageUrl ? (
                            <div className="relative group rounded-xl overflow-hidden border border-[#3f3f3f] aspect-video bg-black">
                              <img src={sel.imageUrl} alt="" className="size-full object-contain" />
                              <button onClick={() => setShowGallery(true)}
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-['Quicksand:Bold',sans-serif] text-xs text-white">
                                Change
                              </button>
                            </div>
                          ) : (
                            <div className="flex gap-2">
                              <button onClick={() => fileRef.current?.click()}
                                className="flex-1 h-16 rounded-xl border border-dashed border-[#3f3f3f] hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors flex flex-col items-center justify-center gap-1 text-[#8e8e91] hover:text-[#FF6B35]">
                                <svg viewBox="0 0 16 16" fill="none" className="size-4">
                                  <path d="M8 2v8M4 6l4-4 4 4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-['Quicksand:Regular',sans-serif] text-xs">Upload</span>
                              </button>
                              <button onClick={() => setShowGallery(true)}
                                className="flex-1 h-16 rounded-xl border border-dashed border-[#3f3f3f] hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors flex flex-col items-center justify-center gap-1 text-[#8e8e91] hover:text-[#FF6B35]">
                                <svg viewBox="0 0 16 16" fill="none" className="size-4">
                                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                                  <circle cx="5.5" cy="6.5" r="1" fill="currentColor" />
                                  <path d="M2 11l3.5-3 3 3 2-2 3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-['Quicksand:Regular',sans-serif] text-xs">Gallery</span>
                              </button>
                            </div>
                          )}
                          <p className="mt-1.5 font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757]">
                            JPEG · PNG · GIF · WebP · SVG &nbsp;·&nbsp; max {MAX_SIZE_MB} MB
                          </p>
                        </Field>
                      )}

                      <div className="h-px bg-[#2d2d2d]" />

                      {/* position */}
                      <div>
                        <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757] mb-3">Position</p>
                        <div className="flex gap-4 items-start">
                          {/* 3×3 preset grid */}
                          <div className="grid grid-cols-3 gap-1 shrink-0" style={{ width: 108 }}>
                            {PRESET_GRID.map(([name, sym, px, py]) => {
                              const on = Math.round(sel.x) === px && Math.round(sel.y) === py
                              return (
                                <button key={name} title={name} onClick={() => applyPreset(px, py)}
                                  className={`h-8 rounded-md flex items-center justify-center text-sm transition-all font-['Quicksand:Bold',sans-serif] ${
                                    on ? "text-white" : "bg-[#282828] hover:bg-[#3f3f3f] text-[#8e8e91] hover:text-white border border-[#3f3f3f]"
                                  }`}
                                  style={on ? { backgroundColor: TYPE_COLORS[sel.type], boxShadow: `0 0 8px ${TYPE_COLORS[sel.type]}66` } : {}}
                                >
                                  {sym}
                                </button>
                              )
                            })}
                          </div>
                          {/* X / Y sliders */}
                          <div className="flex-1 flex flex-col gap-2">
                            <div>
                              <p className="font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757] mb-1">X — {Math.round(sel.x)}%</p>
                              <input type="range" min={2} max={98} className="w-full accent-[#11B2FF]"
                                value={Math.round(sel.x)} onChange={e => update(sel.id, "x", +e.target.value)} />
                            </div>
                            <div>
                              <p className="font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757] mb-1">Y — {Math.round(sel.y)}%</p>
                              <input type="range" min={2} max={98} className="w-full accent-[#11B2FF]"
                                value={Math.round(sel.y)} onChange={e => update(sel.id, "y", +e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-[#2d2d2d]" />

                      {/* size */}
                      <div>
                        <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757] mb-3">Size</p>
                        <div className="flex flex-col gap-2.5">
                          <div>
                            <p className="font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757] mb-1">Scale — {Math.round(sel.scale * 100)}%</p>
                            <input type="range" min={30} max={300} className="w-full accent-[#11B2FF]"
                              value={Math.round(sel.scale * 100)} onChange={e => update(sel.id, "scale", +e.target.value / 100)} />
                          </div>
                          {sel.type !== "image" && (
                            <div>
                              <p className="font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757] mb-1">Font Size — {sel.fontSize}px</p>
                              <input type="range" min={10} max={72} className="w-full accent-[#11B2FF]"
                                value={sel.fontSize} onChange={e => update(sel.id, "fontSize", +e.target.value)} />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* color */}
                      {sel.type !== "image" && (
                        <>
                          <div className="h-px bg-[#2d2d2d]" />
                          <div>
                            <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757] mb-3">Color</p>
                            <div className="flex items-center gap-2">
                              <input type="color" className="h-8 w-10 rounded-lg border border-[#3f3f3f] bg-[#282828] cursor-pointer"
                                value={sel.color} onChange={e => update(sel.id, "color", e.target.value)} />
                              <input className="flex-1 h-8 rounded-lg bg-[#282828] border border-[#3f3f3f] px-3 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors uppercase"
                                value={sel.color} onChange={e => update(sel.id, "color", e.target.value)} />
                            </div>
                          </div>
                        </>
                      )}

                      {/* delete */}
                      <button onClick={() => { removeItem(sel.id); setTab("list") }}
                        className="mt-1 h-8 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-colors font-['Quicksand:Bold',sans-serif] text-xs text-red-400 flex items-center justify-center gap-2">
                        <svg viewBox="0 0 14 14" fill="none" className="size-3.5">
                          <path d="M2.5 3.5h9M5.5 3.5v-1h3v1M4.5 3.5l.5 7h5l.5-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Delete Element
                      </button>
                    </div>
                  ) : (
                    <div className="py-14 flex flex-col items-center text-[#575757]">
                      <svg viewBox="0 0 40 40" fill="none" className="size-10 mb-3 opacity-40">
                        <rect x="4" y="6" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="14" y="11" width="8" height="5" rx="0.5" fill="currentColor" opacity="0.4" />
                      </svg>
                      <p className="font-['Quicksand:Regular',sans-serif] text-sm text-center">Select an overlay on<br />the canvas or list</p>
                      <button onClick={() => setTab("list")} className="mt-4 h-7 px-4 rounded-full bg-[#3f3f3f] hover:bg-[#575757] transition-colors font-['Quicksand:Bold',sans-serif] text-xs text-white">Back to List</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── footer ── */}
            <div className="border-t border-[#575757] px-5 py-3.5 bg-[#282828] shrink-0 flex items-center gap-3">
              <p className="flex-1 font-['Quicksand:Regular',sans-serif] text-xs text-[#8e8e91]">
                {items.filter(i => i.enabled).length}/{items.length} overlay{items.length !== 1 ? "s" : ""} active
              </p>
              <button onClick={onClose} className="h-8 px-5 rounded-full bg-white hover:bg-gray-100 transition-colors font-['Quicksand:Bold',sans-serif] text-sm text-[#1a1a1a]">Apply</button>
            </div>
          </motion.div>

          {/* ── gallery modal ── */}
          <AnimatePresence>
            {showGallery && (
              <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setShowGallery(false)}
              >
                <motion.div
                  className="bg-[#282828] rounded-2xl border border-[#575757] w-[500px] max-h-[440px] flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#575757]">
                    <p className="font-['Quicksand:Bold',sans-serif] text-white">Image Gallery</p>
                    <button onClick={() => setShowGallery(false)} className="text-[#8e8e91] hover:text-white transition-colors">
                      <svg viewBox="0 0 16 16" fill="none" className="size-4"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    {gallery.length === 0 ? (
                      <div className="h-28 flex flex-col items-center justify-center text-[#8e8e91]">
                        <svg viewBox="0 0 48 48" fill="none" className="size-9 mb-2 opacity-40">
                          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                          <circle cx="17" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
                          <path d="M4 34l12-10 8 8 6-6 14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="font-['Quicksand:Regular',sans-serif] text-sm">No images uploaded</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2.5">
                        {gallery.map(img => (
                          <button key={img.id}
                            onClick={() => { if (sel) update(sel.id, "imageUrl", img.url); setShowGallery(false) }}
                            className="group relative aspect-video rounded-lg overflow-hidden border border-[#575757] hover:border-[#FF6B35] transition-colors">
                            <img src={img.url} alt={img.name} className="size-full object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <svg viewBox="0 0 20 20" fill="none" className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#575757] p-4">
                    <input ref={gallRef} type="file" accept={ALLOWED_TYPES.join(",")} multiple className="hidden"
                      onChange={e => { if (e.target.files) { handleUpload(e.target.files); e.target.value = "" } }}
                    />
                    <button onClick={() => gallRef.current?.click()}
                      className="w-full h-9 rounded-xl border border-dashed border-[#575757] hover:border-[#FF6B35] hover:bg-[#FF6B35]/10 transition-colors flex items-center justify-center gap-2 font-['Quicksand:Bold',sans-serif] text-sm text-[#8e8e91] hover:text-[#FF6B35]">
                      <svg viewBox="0 0 16 16" fill="none" className="size-4">
                        <path d="M8 2v8M4 6l4-4 4 4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Upload Images
                    </button>
                    <p className="mt-2 text-center font-['Quicksand:Regular',sans-serif] text-[10px] text-[#575757]">
                      JPEG · PNG · GIF · WebP · SVG &nbsp;·&nbsp; max {MAX_SIZE_MB} MB each
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}
