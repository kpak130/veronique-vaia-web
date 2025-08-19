"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Download, Heart, Share, Upload, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

interface Logo {
  id: number;
  title: string;
  style: string;
  colors: string[];
  prompt: string;
}

export default function LogoProject() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
  const [showLogoPanel, setShowLogoPanel] = useState(false);

  const handleOpenPanel = (logo: Logo) => {
    setSelectedLogo(logo);
    setShowLogoPanel(true);
  };

  const handleClosePanel = () => {
    setShowLogoPanel(false);
    setSelectedLogo(null);
  };

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setShowContent(false);
    
    // After 10 seconds, show the content
    setTimeout(() => {
      setIsGenerating(false);
      setShowContent(true);
    }, 10000);
  };

  const logoData = [
    { id: 1, title: "Modern Tech Logo", style: "Modern", colors: ["blue", "darkBlue"], prompt: "Clean, modern logo for technology company with geometric elements" },
    { id: 2, title: "Creative Agency Logo", style: "Creative", colors: ["lime", "blue"], prompt: "Vibrant, creative logo with artistic flair for design agency" },
    { id: 3, title: "Corporate Logo", style: "Professional", colors: ["coral", "darkBlue"], prompt: "Professional corporate logo with strong brand presence" },
    { id: 4, title: "Startup Logo", style: "Bold", colors: ["darkBlue"], prompt: "Bold, innovative logo for tech startup with growth mindset" },
    { id: 5, title: "Elegant Brand Logo", style: "Elegant", colors: ["blue", "lime"], prompt: "Sophisticated logo with elegant typography and refined aesthetics" },
    { id: 6, title: "Playful Logo", style: "Playful", colors: ["coral", "lime"], prompt: "Fun, playful logo with vibrant colors and friendly appeal" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.lightGray }}>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.darkBlue }}>
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: BRAND_COLORS.lime }}></div>
            </div>
            <span className="text-xl text-gray-700 font-medium">Vaia</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search logos..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none focus:bg-white focus:shadow-md transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Grid3X3 className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.blue }}>
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-14">
        {/* Left Panel - Input Controls */}
        <aside className="w-80 bg-white border-r flex flex-col relative">
          <div className="flex-1 p-6 overflow-y-auto pb-24">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="food">Food & Beverage</option>
                    <option value="education">Education</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">Modern</Button>
                    <Button variant="outline" className="justify-start">Classic</Button>
                    <Button variant="outline" className="justify-start">Playful</Button>
                    <Button variant="outline" className="justify-start">Minimal</Button>
                    <Button variant="outline" className="justify-start">Bold</Button>
                    <Button variant="outline" className="justify-start">Elegant</Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colors
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.darkBlue }}></div>
                    <div className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.blue }}></div>
                    <div className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.lime }}></div>
                    <div className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.coral }}></div>
                    <div className="w-8 h-8 bg-gray-800 rounded border-2 border-gray-300 cursor-pointer"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded border-2 border-gray-300 cursor-pointer"></div>
                    <div className="w-8 h-8 bg-white rounded border-2 border-gray-300 cursor-pointer"></div>
                    <div className="w-8 h-8 bg-black rounded border-2 border-gray-300 cursor-pointer"></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Describe your brand values, target audience, or specific elements you'd like to include..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Reference Files
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Drag and drop files here</p>
                    <p className="text-xs text-gray-500">or click to browse</p>
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fixed bottom button */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-6 bg-white border-t">
            <Button 
              className="w-full h-14 text-lg font-medium" 
              style={{ backgroundColor: BRAND_COLORS.lime, color: BRAND_COLORS.darkBlue }}
              onClick={handleGenerateContent}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Logos'
              )}
            </Button>
          </div>
        </aside>

        {/* Right Panel - Logo Grid */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Generated Logos</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Loading cards */}
            {isGenerating && (
              <>
                {Array.from({ length: 10 }, (_, i) => (
                  <Card key={`loading-${i}`} className="animate-pulse">
                    <CardContent className="p-4">
                      <div className="aspect-square rounded-lg mb-3 bg-gray-100 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 animate-spin" style={{ color: BRAND_COLORS.blue }} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-6 h-6 bg-gray-100 rounded"></div>
                          <div className="w-6 h-6 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
            
            {/* Actual content */}
            {showContent && logoData.map((logo, i) => (
              <Card key={logo.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => handleOpenPanel(logo)}>
                <CardContent className="p-4">
                  <div className="aspect-square rounded-lg flex items-center justify-center mb-3 relative overflow-hidden" style={{ background: i % 4 === 0 ? `linear-gradient(135deg, ${BRAND_COLORS.blue} 0%, ${BRAND_COLORS.darkBlue} 100%)` : i % 4 === 1 ? `linear-gradient(135deg, ${BRAND_COLORS.lime} 0%, ${BRAND_COLORS.blue} 100%)` : i % 4 === 2 ? `linear-gradient(135deg, ${BRAND_COLORS.coral} 0%, ${BRAND_COLORS.darkBlue} 100%)` : BRAND_COLORS.darkBlue }}>
                    <div className="font-bold text-xl" style={{ color: i % 4 === 2 ? 'white' : i % 4 === 1 ? BRAND_COLORS.darkBlue : BRAND_COLORS.lime }}>
                      {i % 3 === 0 ? 'VAIA' : i % 3 === 1 ? 'V' : '🚀'}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{logo.title}</p>
                      <p className="text-xs text-gray-500">{logo.style}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="w-6 h-6">
                        <Heart className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {showContent && (
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More Logos</Button>
            </div>
          )}
        </main>

        {/* Logo Detail Sliding Panel */}
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 ${showLogoPanel ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleClosePanel}
          />
          
          {/* Sliding Panel */}
          <div className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-xl z-70 transform transition-all duration-300 ease-in-out ${showLogoPanel ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Logo Details</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleClosePanel}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              {selectedLogo && (
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Logo Preview */}
                  <div className="mb-6">
                    <div className="aspect-square rounded-lg flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BRAND_COLORS.blue} 0%, ${BRAND_COLORS.darkBlue} 100%)` }}>
                      <div className="font-bold text-4xl" style={{ color: BRAND_COLORS.lime }}>
                        VAIA
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{selectedLogo.title}</h4>
                      <p className="text-sm text-gray-500">{selectedLogo.style} Style</p>
                    </div>
                  </div>

                  {/* Logo Information */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Prompt Used</h5>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedLogo.prompt}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Style</h5>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{selectedLogo.style}</span>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Colors</h5>
                      <div className="flex space-x-2">
                        {selectedLogo.colors.map((color: string, index: number) => (
                          <div 
                            key={index}
                            className="w-8 h-8 rounded border-2 border-gray-300"
                            style={{ backgroundColor: BRAND_COLORS[color as keyof typeof BRAND_COLORS] }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full" style={{ backgroundColor: BRAND_COLORS.lime, color: BRAND_COLORS.darkBlue }}>
                      <Download className="w-4 h-4 mr-2" />
                      Download PNG
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download SVG
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share className="w-4 h-4 mr-2" />
                      Share Logo
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}