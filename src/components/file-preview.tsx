'use client'

import { useState, useRef } from 'react'
import { 
  File, 
  FileVideo, 
  FileDoc, 
  FilePdf, 
  FileImage, 
  Download, 
  X, 
  Play, 
  ArrowSquareOut, 
  CircleNotch,
  Folder
} from '@phosphor-icons/react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

export interface UploadedFile {
  path: string
  filename: string
  type: string
  size: number
  url?: string
}

export interface FilePreviewProps {
  files: UploadedFile[]
  title?: string
  /**
   * Function to get signed URL for a file. If not provided, uses the url property from the file object.
   */
  getSignedUrl?: (path: string) => Promise<string | null>
  /**
   * Show as a card with header, or just the file list
   */
  showCard?: boolean
  /**
   * Empty state message
   */
  emptyMessage?: string
}

function getFileIcon(type: string) {
  if (type.startsWith('video/') || type === 'screen_recording') return FileVideo
  if (type.startsWith('image/') || type === 'image') return FileImage
  if (type === 'application/pdf' || type === 'pdf') return FilePdf
  if (type.includes('document') || type === 'document') return FileDoc
  return File
}

function getTypeLabel(type: string): string {
  if (type.startsWith('video/') || type === 'screen_recording') return 'Video'
  if (type.startsWith('audio/')) return 'Audio'
  if (type.startsWith('image/') || type === 'image') return 'Image'
  if (type === 'application/pdf' || type === 'pdf') return 'PDF'
  if (type.includes('document') || type === 'document') return 'Document'
  return 'File'
}

function formatSize(size: number): string {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`
  return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

function canPreview(file: UploadedFile): boolean {
  const ext = file.filename.toLowerCase().split('.').pop() || ''
  // Images
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return true
  // Videos
  if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(ext)) return true
  // PDFs
  if (ext === 'pdf') return true
  // By type
  if (file.type.startsWith('image/') || file.type === 'image') return true
  if (file.type.startsWith('video/') || file.type === 'screen_recording') return true
  if (file.type === 'application/pdf' || file.type === 'pdf') return true
  return false
}

function getPreviewType(file: UploadedFile): 'image' | 'video' | 'pdf' | 'none' {
  const ext = file.filename.toLowerCase().split('.').pop() || ''
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext) || file.type.startsWith('image/') || file.type === 'image') return 'image'
  if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(ext) || file.type.startsWith('video/') || file.type === 'screen_recording') return 'video'
  if (ext === 'pdf' || file.type === 'application/pdf' || file.type === 'pdf') return 'pdf'
  return 'none'
}

export function FilePreview({ 
  files, 
  title = 'Uploaded Files',
  getSignedUrl,
  showCard = true,
  emptyMessage = 'No files uploaded'
}: FilePreviewProps) {
  const [previewFile, setPreviewFile] = useState<UploadedFile | null>(null)
  const [videoError, setVideoError] = useState(false)
  const [signedUrl, setSignedUrl] = useState<string | null>(null)
  const [loadingUrl, setLoadingUrl] = useState(false)
  const [urlError, setUrlError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleOpenPreview = async (file: UploadedFile) => {
    setVideoError(false)
    setPreviewFile(file)
    setUrlError(null)
    
    // Get the URL
    if (file.url) {
      setSignedUrl(file.url)
    } else if (getSignedUrl) {
      setLoadingUrl(true)
      try {
        const url = await getSignedUrl(file.path)
        if (url) {
          setSignedUrl(url)
        } else {
          setUrlError('Failed to load file URL')
        }
      } catch (error) {
        setUrlError(error instanceof Error ? error.message : 'Failed to load file')
      } finally {
        setLoadingUrl(false)
      }
    } else {
      setUrlError('No URL available for this file')
    }
  }

  const handleClosePreview = () => {
    setPreviewFile(null)
    setSignedUrl(null)
    setUrlError(null)
    setLoadingUrl(false)
    setVideoError(false)
  }

  const handleDownload = async (e: React.MouseEvent, file: UploadedFile) => {
    e.stopPropagation()
    
    let url = file.url
    if (!url && getSignedUrl) {
      url = await getSignedUrl(file.path) || undefined
    }
    
    if (url) {
      window.open(url, '_blank')
    }
  }

  const content = (
    <>
      {files.length > 0 ? (
        <div className="space-y-2">
          {files.map((file, i) => {
            const FileIcon = getFileIcon(file.type)
            const typeLabel = getTypeLabel(file.type)
            const sizeLabel = formatSize(file.size)
            const isPreviewable = canPreview(file)
            const previewType = getPreviewType(file)
            
            return (
              <div 
                key={i}
                className={`flex items-center justify-between p-3 rounded-md bg-gray-50 transition-colors ${
                  isPreviewable ? 'hover:bg-gray-100 cursor-pointer' : ''
                }`}
                onClick={() => isPreviewable && handleOpenPreview(file)}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-sm bg-white border border-gray-200 flex items-center justify-center">
                      <FileIcon className="w-5 h-5 text-[var(--cyan)]" weight="fill" />
                    </div>
                    {previewType === 'video' && (
                      <Play className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 text-[var(--cyan)] bg-white rounded-full" weight="fill" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--black)] truncate">{file.filename}</p>
                    <p className="text-xs text-muted-foreground">
                      {typeLabel} · {sizeLabel}
                      {isPreviewable && (
                        <span className="text-[var(--cyan)] ml-1">· Click to preview</span>
                      )}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={(e) => handleDownload(e, file)}
                  className="p-2 rounded-sm hover:bg-gray-200 transition-colors shrink-0"
                  title="Download"
                >
                  <Download className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 border border-dashed border-gray-200 rounded-md">
          <div className="text-center">
            <Folder size={24} className="text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewFile && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={handleClosePreview}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3 min-w-0">
                {(() => {
                  const FileIcon = getFileIcon(previewFile.type)
                  return <FileIcon className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" weight="fill" />
                })()}
                <div className="min-w-0">
                  <p className="font-medium text-[var(--black)] truncate">{previewFile.filename}</p>
                  <p className="text-xs text-muted-foreground">
                    {getTypeLabel(previewFile.type)} · {formatSize(previewFile.size)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {signedUrl && (
                  <>
                    <a
                      href={signedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                      title="Open in new tab"
                    >
                      <ArrowSquareOut className="w-5 h-5 text-muted-foreground" />
                    </a>
                    <a
                      href={signedUrl}
                      download={previewFile.filename}
                      className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                      title="Download"
                    >
                      <Download className="w-5 h-5 text-muted-foreground" />
                    </a>
                  </>
                )}
                <button
                  onClick={handleClosePreview}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-4 bg-gray-900 flex items-center justify-center min-h-[400px]">
              {loadingUrl && (
                <div className="text-center text-white">
                  <CircleNotch className="w-8 h-8 mx-auto mb-2 animate-spin text-[var(--cyan)]" />
                  <p className="text-sm text-gray-400">Loading file...</p>
                </div>
              )}
              {urlError && (
                <div className="text-center text-white max-w-md">
                  <File className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                  <p className="text-lg font-medium mb-2">Failed to Load File</p>
                  <p className="text-sm text-gray-400">{urlError}</p>
                </div>
              )}
              {signedUrl && !loadingUrl && !urlError && (
                <>
                  {getPreviewType(previewFile) === 'image' && (
                    <img 
                      src={signedUrl} 
                      alt={previewFile.filename}
                      className="max-w-full max-h-[70vh] object-contain rounded-md"
                    />
                  )}
                  {getPreviewType(previewFile) === 'video' && !videoError && (
                    <video 
                      ref={videoRef}
                      src={signedUrl}
                      controls
                      autoPlay
                      className="w-full max-h-[70vh] rounded-md bg-black"
                      onError={() => setVideoError(true)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {getPreviewType(previewFile) === 'video' && videoError && (
                    <div className="text-center text-white max-w-md">
                      <FileVideo className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                      <p className="text-lg font-medium mb-2">Video Preview Not Available</p>
                      <p className="text-sm text-gray-400 mb-6">
                        This video format (.{previewFile.filename.split('.').pop()}) cannot be played directly in the browser.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <a
                          href={signedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          <ArrowSquareOut className="w-4 h-4" />
                          Open in New Tab
                        </a>
                        <a
                          href={signedUrl}
                          download={previewFile.filename}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--cyan)] text-gray-900 rounded-full text-sm font-medium hover:bg-[var(--cyan)]/90 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  )}
                  {getPreviewType(previewFile) === 'pdf' && (
                    <iframe
                      src={signedUrl}
                      className="w-full h-[70vh] rounded-md border-0 bg-white"
                      title={previewFile.filename}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )

  if (!showCard) {
    return content
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}
