import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import svgPaths from "../imports/svg-bm5puqa07y"

type OSDItemType = "text" | "time" | "image" | "h5"

interface OSDItem {
  id: string
  type: OSDItemType
  label: string
  enabled: boolean
  content: string
  x: number
  y: number
  fontSize: number
  color: string
  imageUrl?: string
}

interface GalleryImage {
  id: string
  url: string
  name: string
}

const TYPE_LABELS: Record<OSDItemType, string> = {
  text: "Text Overlay",
  time: "Time Display",
  image: "Image Overlay",
  h5: "H5 Overlay",
}

const TYPE_COLORS: Record<OSDItemType, string> = {
  text: "#11B2FF",
  time: "#00BE63",
  image: "#FF6B35",
  h5: "#A855F7",
}

const TYPE_ICONS: Record<OSDItemType, React.ReactNode> = {
  text: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path d="M2 3h12M8 3v10M5 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="6.5" r="1" fill="currentColor" />
      <path d="M2 11l3.5-3 3 3 2-2 3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  h5: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 5v6M5 8h6M11 5v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
}

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={enabled}
      className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none"
      style={{ backgroundColor: enabled ? "#11B2FF" : "#4b4b4b" }}
    >
      <motion.span
        layout
        className="absolute size-3.5 rounded-full bg-white shadow-sm"
        animate={{ x: enabled ? 18 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    </button>
  )
}

function Clock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="font-['Quicksand:Bold',sans-serif] tabular-nums text-white">
      {time.toLocaleTimeString()}
    </span>
  )
}

const PREVIEW_W = 640
const PREVIEW_H = 360

function OSDPreviewOverlay({ items, galleryImages }: { items: OSDItem[]; galleryImages: GalleryImage[] }) {
  const activeItems = items.filter((i) => i.enabled)
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {activeItems.map((item) => (
        <div
          key={item.id}
          className="absolute select-none"
          style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%,-50%)" }}
        >
          {item.type === "text" && (
            <span
              className="font-['Quicksand:Bold',sans-serif] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              style={{ fontSize: item.fontSize, color: item.color }}
            >
              {item.content || "Sample Text"}
            </span>
          )}
          {item.type === "time" && (
            <span
              className="font-['Quicksand:Bold',sans-serif] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tabular-nums"
              style={{ fontSize: item.fontSize, color: item.color }}
            >
              <Clock />
            </span>
          )}
          {item.type === "image" && item.imageUrl && (
            <img
              src={item.imageUrl}
              alt="OSD image"
              className="max-w-[120px] max-h-[80px] object-contain rounded drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"
            />
          )}
          {item.type === "h5" && (
            <div
              className="rounded border border-white/30 bg-black/50 px-2 py-1 text-xs drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              style={{ color: item.color, fontSize: item.fontSize - 2 }}
            >
              <span className="font-['Inter:Bold',sans-serif]">{item.content || "H5 Overlay"}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ItemRow({
  item,
  selected,
  onSelect,
  onToggle,
  onDelete,
}: {
  item: OSDItem
  selected: boolean
  onSelect: () => void
  onToggle: () => void
  onDelete: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer transition-colors ${
        selected ? "bg-[#575757]" : "hover:bg-[#3f3f3f]"
      }`}
      onClick={onSelect}
    >
      <span style={{ color: TYPE_COLORS[item.type] }}>{TYPE_ICONS[item.type]}</span>
      <div className="flex-1 min-w-0">
        <p className="font-['Quicksand:Bold',sans-serif] text-sm text-white truncate">{item.label}</p>
        <p className="font-['Quicksand:Regular',sans-serif] text-xs text-[#8e8e91] truncate">{TYPE_LABELS[item.type]}</p>
      </div>
      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
        <Toggle enabled={item.enabled} onToggle={onToggle} />
        <button
          onClick={onDelete}
          className="size-6 flex items-center justify-center rounded hover:bg-[#575757] text-[#8e8e91] hover:text-white transition-colors"
        >
          <svg viewBox="0 0 14 14" fill="none" className="size-3.5">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

function GalleryModal({
  images,
  onSelect,
  onClose,
  onUpload,
}: {
  images: GalleryImage[]
  onSelect: (img: GalleryImage) => void
  onClose: () => void
  onUpload: (files: FileList) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#282828] rounded-2xl border border-[#575757] w-[560px] max-h-[480px] flex flex-col overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#575757]">
          <h3 className="font-['Quicksand:Bold',sans-serif] text-white text-base">Image Gallery</h3>
          <button onClick={onClose} className="text-[#8e8e91] hover:text-white transition-colors">
            <svg viewBox="0 0 16 16" fill="none" className="size-4">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {images.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-[#8e8e91]">
              <svg viewBox="0 0 48 48" fill="none" className="size-10 mb-2 opacity-50">
                <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M4 34l12-10 8 8 6-6 14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Quicksand:Regular',sans-serif] text-sm">No images uploaded yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3">
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => onSelect(img)}
                  className="group relative aspect-video rounded-lg overflow-hidden border border-[#575757] hover:border-[#11B2FF] transition-colors"
                >
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
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && onUpload(e.target.files)}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="w-full h-9 rounded-lg border border-dashed border-[#575757] hover:border-[#11B2FF] hover:bg-[#11B2FF]/10 transition-colors flex items-center justify-center gap-2 font-['Quicksand:Bold',sans-serif] text-sm text-[#8e8e91] hover:text-[#11B2FF]"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-4">
              <path d="M8 2v10M3 7l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Upload Images
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

let idCounter = 0
function genId() {
  return `osd-${Date.now()}-${++idCounter}`
}

const INIT_ITEMS: OSDItem[] = [
  { id: genId(), type: "time", label: "Timestamp", enabled: true, content: "", x: 85, y: 8, fontSize: 16, color: "#00BE63" },
  { id: genId(), type: "text", label: "Channel Name", enabled: true, content: "HERO ESPORTS", x: 15, y: 8, fontSize: 18, color: "#FFFFFF" },
]

export default function OSDPanel() {
  const [osdEnabled, setOsdEnabled] = useState(true)
  const [items, setItems] = useState<OSDItem[]>(INIT_ITEMS)
  const [selectedId, setSelectedId] = useState<string | null>(INIT_ITEMS[0].id)
  const [showGallery, setShowGallery] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [activeTab, setActiveTab] = useState<"list" | "settings">("list")

  const selectedItem = items.find((i) => i.id === selectedId) ?? null

  const addItem = (type: OSDItemType) => {
    const newItem: OSDItem = {
      id: genId(),
      type,
      label: TYPE_LABELS[type],
      enabled: true,
      content: type === "text" ? "New Text" : type === "h5" ? "<div>H5 Content</div>" : "",
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 60,
      fontSize: 16,
      color: TYPE_COLORS[type],
    }
    setItems((prev) => [...prev, newItem])
    setSelectedId(newItem.id)
  }

  const updateItem = useCallback(<K extends keyof OSDItem>(id: string, key: K, val: OSDItem[K]) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, [key]: val } : item)))
  }, [])

  const toggleItem = (id: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)))
  }

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
    if (selectedId === id) setSelectedId(null)
  }

  const handleUpload = (files: FileList) => {
    const newImgs: GalleryImage[] = []
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file)
      newImgs.push({ id: genId(), url, name: file.name })
    })
    setGalleryImages((prev) => [...prev, ...newImgs])
  }

  const handleGallerySelect = (img: GalleryImage) => {
    if (!selectedId) return
    setItems((prev) =>
      prev.map((item) => (item.id === selectedId ? { ...item, imageUrl: img.url } : item))
    )
    setShowGallery(false)
  }

  return (
    <div className="bg-[#1a1a1a] size-full flex flex-col min-h-0 font-['Inter:Regular',sans-serif]">
      {/* Top bar */}
      <div className="bg-[#282828] border-b border-[#575757] h-[60px] flex items-center px-6 gap-4 shrink-0">
        <div className="flex items-center gap-2 flex-1">
          <svg viewBox="0 0 24 24" fill="none" className="size-5 text-[#11B2FF]">
            <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 18v2M16 18v2M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 9h5M7 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="14" y="8" width="4" height="3" rx="0.5" fill="currentColor" />
          </svg>
          <span className="font-['Quicksand:Bold',sans-serif] text-white text-base">OSD Overlay</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-['Quicksand:Regular',sans-serif] text-sm text-[#8e8e91]">
            {osdEnabled ? "Enabled" : "Disabled"}
          </span>
          <Toggle enabled={osdEnabled} onToggle={() => setOsdEnabled((v) => !v)} />
        </div>
        <button
          onClick={() => setShowPreview(true)}
          className="h-8 px-4 rounded-full bg-[#11B2FF] hover:bg-[#0ea5e0] transition-colors flex items-center gap-1.5 font-['Quicksand:Bold',sans-serif] text-sm text-white"
        >
          <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
            <path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          Preview
        </button>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Left panel — OSD list */}
        <div className="w-[260px] shrink-0 border-r border-[#575757] flex flex-col bg-[#222222]">
          {/* Tab switcher */}
          <div className="flex border-b border-[#575757]">
            {(["list", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 h-10 font-['Quicksand:Bold',sans-serif] text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? "text-[#11B2FF] border-b-2 border-[#11B2FF]"
                    : "text-[#8e8e91] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "list" ? (
            <>
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
                <AnimatePresence>
                  {items.map((item) => (
                    <ItemRow
                      key={item.id}
                      item={item}
                      selected={selectedId === item.id}
                      onSelect={() => setSelectedId(item.id)}
                      onToggle={() => toggleItem(item.id)}
                      onDelete={() => deleteItem(item.id)}
                    />
                  ))}
                </AnimatePresence>
                {items.length === 0 && (
                  <p className="text-center text-[#8e8e91] font-['Quicksand:Regular',sans-serif] text-xs pt-8">
                    No OSD items yet.<br />Add one below.
                  </p>
                )}
              </div>
              {/* Add buttons */}
              <div className="border-t border-[#575757] p-3">
                <p className="font-['Quicksand:Bold',sans-serif] text-[10px] uppercase tracking-widest text-[#575757] mb-2">Add overlay</p>
                <div className="grid grid-cols-2 gap-2">
                  {(["text", "time", "image", "h5"] as OSDItemType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => addItem(type)}
                      className="flex items-center gap-2 h-9 px-3 rounded-lg bg-[#3f3f3f] hover:bg-[#575757] transition-colors font-['Quicksand:Bold',sans-serif] text-xs text-white"
                    >
                      <span style={{ color: TYPE_COLORS[type] }}>{TYPE_ICONS[type]}</span>
                      {TYPE_LABELS[type].split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              <div>
                <p className="font-['Quicksand:Bold',sans-serif] text-xs uppercase tracking-widest text-[#575757] mb-3">Global OSD Settings</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-['Quicksand:Regular',sans-serif] text-sm text-[#8e8e91]">Show on output</span>
                    <Toggle enabled={osdEnabled} onToggle={() => setOsdEnabled((v) => !v)} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Quicksand:Regular',sans-serif] text-sm text-[#8e8e91]">Show in preview</span>
                    <Toggle enabled={true} onToggle={() => {}} />
                  </div>
                </div>
              </div>
              <div className="h-px bg-[#575757]" />
              <div>
                <p className="font-['Quicksand:Bold',sans-serif] text-xs uppercase tracking-widest text-[#575757] mb-3">Active Overlays</p>
                <div className="flex flex-col gap-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2">
                        <span style={{ color: TYPE_COLORS[item.type] }}>{TYPE_ICONS[item.type]}</span>
                        <span className="font-['Quicksand:Regular',sans-serif] text-sm text-white">{item.label}</span>
                      </div>
                      <span className={`text-xs font-['Quicksand:Bold',sans-serif] ${item.enabled ? "text-[#00BE63]" : "text-[#575757]"}`}>
                        {item.enabled ? "ON" : "OFF"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center — preview canvas */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Preview area */}
          <div className="flex-1 flex items-center justify-center p-6 bg-[#1a1a1a]">
            <div className="flex flex-col items-center gap-3">
              <div
                className="relative bg-black rounded-lg overflow-hidden border border-[#575757]"
                style={{ width: PREVIEW_W, height: PREVIEW_H, maxWidth: "100%", aspectRatio: "16/9" }}
              >
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#000]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-[#575757]">
                    <svg viewBox="0 0 48 48" fill="none" className="size-12 opacity-40">
                      <rect x="3" y="8" width="42" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M17 20l14 4-14 4V20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Quicksand:Regular',sans-serif] text-sm opacity-60">Video preview</span>
                  </div>
                </div>
                {/* OSD overlays */}
                <AnimatePresence>
                  {osdEnabled && (
                    <motion.div
                      key="osd-overlays"
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <OSDPreviewOverlay items={items} galleryImages={galleryImages} />
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Drag hint dots */}
                {osdEnabled && items.filter((i) => i.enabled).map((item) => (
                  <div
                    key={item.id + "-dot"}
                    className="absolute cursor-move"
                    style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%,-50%)" }}
                  >
                    {selectedId === item.id && (
                      <div
                        className="absolute inset-[-6px] rounded-full border-2 opacity-60"
                        style={{ borderColor: TYPE_COLORS[item.type] }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#575757] text-xs font-['Quicksand:Regular',sans-serif]">
                <svg viewBox="0 0 12 12" fill="none" className="size-3">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" />
                  <path d="M6 4v2.5l1.5 1" stroke="currentColor" strokeLinecap="round" />
                </svg>
                Live canvas · {items.filter((i) => i.enabled).length} overlay{items.filter((i) => i.enabled).length !== 1 ? "s" : ""} active
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — selected item settings */}
        <div className="w-[280px] shrink-0 border-l border-[#575757] bg-[#222222] flex flex-col">
          <div className="px-4 py-3 border-b border-[#575757]">
            <p className="font-['Quicksand:Bold',sans-serif] text-sm text-white">Element Properties</p>
          </div>

          {selectedItem ? (
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {/* Label */}
              <div>
                <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">Label</label>
                <input
                  className="w-full h-9 rounded-lg bg-[#3f3f3f] border border-[#575757] px-3 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors"
                  value={selectedItem.label}
                  onChange={(e) => updateItem(selectedItem.id, "label", e.target.value)}
                />
              </div>

              {/* Content (text/h5) */}
              {(selectedItem.type === "text" || selectedItem.type === "h5") && (
                <div>
                  <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">
                    {selectedItem.type === "h5" ? "H5 Content" : "Text Content"}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg bg-[#3f3f3f] border border-[#575757] px-3 py-2 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors resize-none"
                    value={selectedItem.content}
                    onChange={(e) => updateItem(selectedItem.id, "content", e.target.value)}
                  />
                </div>
              )}

              {/* Image picker */}
              {selectedItem.type === "image" && (
                <div>
                  <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">Image</label>
                  {selectedItem.imageUrl ? (
                    <div className="relative group rounded-lg overflow-hidden border border-[#575757] aspect-video bg-black">
                      <img src={selectedItem.imageUrl} alt="selected" className="size-full object-contain" />
                      <button
                        onClick={() => setShowGallery(true)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-['Quicksand:Bold',sans-serif] text-xs"
                      >
                        Change Image
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowGallery(true)}
                      className="w-full h-20 rounded-lg border border-dashed border-[#575757] hover:border-[#11B2FF] hover:bg-[#11B2FF]/10 transition-colors flex flex-col items-center justify-center gap-1 text-[#8e8e91] hover:text-[#11B2FF]"
                    >
                      <svg viewBox="0 0 20 20" fill="none" className="size-5">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="font-['Quicksand:Regular',sans-serif] text-xs">Open Gallery</span>
                    </button>
                  )}
                </div>
              )}

              {/* Position */}
              <div>
                <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">Position</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] text-[#575757] font-['Quicksand:Regular',sans-serif]">X %</span>
                    <input
                      type="number" min={0} max={100}
                      className="w-full h-8 mt-1 rounded-lg bg-[#3f3f3f] border border-[#575757] px-2 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors"
                      value={Math.round(selectedItem.x)}
                      onChange={(e) => updateItem(selectedItem.id, "x", Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#575757] font-['Quicksand:Regular',sans-serif]">Y %</span>
                    <input
                      type="number" min={0} max={100}
                      className="w-full h-8 mt-1 rounded-lg bg-[#3f3f3f] border border-[#575757] px-2 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors"
                      value={Math.round(selectedItem.y)}
                      onChange={(e) => updateItem(selectedItem.id, "y", Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              {/* Font size */}
              {selectedItem.type !== "image" && (
                <div>
                  <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">
                    Font Size — {selectedItem.fontSize}px
                  </label>
                  <input
                    type="range" min={10} max={72}
                    className="w-full accent-[#11B2FF]"
                    value={selectedItem.fontSize}
                    onChange={(e) => updateItem(selectedItem.id, "fontSize", Number(e.target.value))}
                  />
                </div>
              )}

              {/* Color */}
              {selectedItem.type !== "image" && (
                <div>
                  <label className="block font-['Quicksand:Bold',sans-serif] text-xs text-[#8e8e91] uppercase tracking-wide mb-1.5">Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      className="h-9 w-12 rounded-lg border border-[#575757] bg-[#3f3f3f] cursor-pointer"
                      value={selectedItem.color}
                      onChange={(e) => updateItem(selectedItem.id, "color", e.target.value)}
                    />
                    <input
                      className="flex-1 h-9 rounded-lg bg-[#3f3f3f] border border-[#575757] px-3 text-sm text-white font-['Quicksand:Regular',sans-serif] focus:border-[#11B2FF] focus:outline-none transition-colors uppercase"
                      value={selectedItem.color}
                      onChange={(e) => updateItem(selectedItem.id, "color", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Visibility */}
              <div className="flex items-center justify-between pt-1">
                <span className="font-['Quicksand:Bold',sans-serif] text-sm text-[#8e8e91]">Visible</span>
                <Toggle enabled={selectedItem.enabled} onToggle={() => toggleItem(selectedItem.id)} />
              </div>

              <button
                onClick={() => deleteItem(selectedItem.id)}
                className="mt-auto h-9 rounded-lg border border-red-500/40 hover:bg-red-500/10 transition-colors font-['Quicksand:Bold',sans-serif] text-sm text-red-400 flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 16 16" fill="none" className="size-4">
                  <path d="M3 4h10M6 4V3h4v1M5 4l.5 8h5L11 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Delete Element
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div className="text-[#575757]">
                <svg viewBox="0 0 40 40" fill="none" className="size-10 mx-auto mb-3 opacity-50">
                  <rect x="4" y="6" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 15h6M14 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="22" y="13" width="7" height="5" rx="0.5" fill="currentColor" />
                </svg>
                <p className="font-['Quicksand:Regular',sans-serif] text-sm">Select an overlay element<br />to edit its properties</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery modal */}
      <AnimatePresence>
        {showGallery && (
          <GalleryModal
            images={galleryImages}
            onSelect={handleGallerySelect}
            onClose={() => setShowGallery(false)}
            onUpload={handleUpload}
          />
        )}
      </AnimatePresence>

      {/* Full preview modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              className="bg-[#282828] rounded-2xl border border-[#575757] overflow-hidden flex flex-col"
              style={{ width: 760 }}
              initial={{ opacity: 0, y: 43 }}
              animate={{ opacity: [0, 1, 1], y: [43, 0, 0] }}
              exit={{ opacity: 0, y: 24 }}
              transition={{
                opacity: { duration: 0.4, times: [0, 0.511, 1], ease: [[0.5, 0, 0.5, 1], "linear"] },
                y: { duration: 0.4, times: [0, 0.511, 1], ease: ["easeInOut", "linear"] },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#575757]">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" fill="none" className="size-4 text-[#11B2FF]">
                    <path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <span className="font-['Quicksand:Bold',sans-serif] text-white text-sm">OSD Preview</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-['Quicksand:Bold',sans-serif] ${osdEnabled ? "bg-[#00BE63]/20 text-[#00BE63]" : "bg-[#575757]/40 text-[#575757]"}`}>
                    {osdEnabled ? "ACTIVE" : "DISABLED"}
                  </span>
                </div>
                <button onClick={() => setShowPreview(false)} className="text-[#8e8e91] hover:text-white transition-colors">
                  <svg viewBox="0 0 16 16" fill="none" className="size-4">
                    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <div className="relative bg-black rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] to-[#000]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#575757] flex flex-col items-center gap-2">
                      <svg viewBox="0 0 64 64" fill="none" className="size-16 opacity-30">
                        <rect x="4" y="10" width="56" height="38" rx="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M22 26l20 6-20 6V26z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                      <span className="font-['Quicksand:Regular',sans-serif] text-sm opacity-50">Live preview</span>
                    </div>
                  </div>
                  {osdEnabled && <OSDPreviewOverlay items={items} galleryImages={galleryImages} />}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {items.filter((i) => i.enabled).map((item) => (
                      <div key={item.id} className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full" style={{ backgroundColor: TYPE_COLORS[item.type] }} />
                        <span className="font-['Quicksand:Regular',sans-serif] text-xs text-[#8e8e91]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="h-8 px-5 rounded-full bg-white hover:bg-gray-100 transition-colors font-['Quicksand:Bold',sans-serif] text-sm text-[#1a1a1a]"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
