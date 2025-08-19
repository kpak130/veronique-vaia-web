"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Heart, Share, Upload, Loader2, X, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

interface BrandName {
  id: number;
  name: string;
  slogan: string;
  trademarkStatus: 'available' | 'pending' | 'registered' | 'unknown';
  type: 'name' | 'slogan' | 'combo';
  industry: string;
  style: string;
  prompt: string;
}

export default function BrandNamesSlogansProject() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedBrandName, setSelectedBrandName] = useState<BrandName | null>(null);
  const [showBrandPanel, setShowBrandPanel] = useState(false);

  const handleClosePanel = () => {
    setShowBrandPanel(false);
    setSelectedBrandName(null);
  };

  const handleVerifyTrademark = (brandId: number) => {
    // Simulate trademark verification
    alert(`Verifying trademark status for brand ID: ${brandId}`);
  };

  const getTrademarkStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'registered': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'unknown': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrademarkStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'registered': return 'Registered';
      case 'pending': return 'Pending';
      case 'unknown': return 'Unknown';
      default: return 'Unknown';
    }
  };

  const getTrademarkStatusBorder = (status: string) => {
    switch (status) {
      case 'available': return 'border-green-300';
      case 'registered': return 'border-red-300';
      case 'pending': return 'border-yellow-300';
      case 'unknown': return 'border-gray-300';
      default: return 'border-gray-300';
    }
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

  const brandData: BrandName[] = [
    { id: 1, name: "TechFlow", slogan: "Innovation in Motion", trademarkStatus: "available", type: "combo", industry: "Technology", style: "Modern", prompt: "Tech company focused on workflow automation and innovation" },
    { id: 2, name: "GreenLeaf Solutions", slogan: "Growing Tomorrow", trademarkStatus: "unknown", type: "combo", industry: "Environmental", style: "Natural", prompt: "Sustainable solutions company with environmental focus" },
    { id: 3, name: "PixelCraft", slogan: "Digital Dreams Realized", trademarkStatus: "pending", type: "combo", industry: "Design", style: "Creative", prompt: "Digital design agency specializing in creative solutions" },
    { id: 4, name: "VitalCore", slogan: "Strength from Within", trademarkStatus: "available", type: "combo", industry: "Fitness", style: "Bold", prompt: "Fitness and wellness brand promoting inner strength" },
    { id: 5, name: "CloudVista", slogan: "Your Sky, Your Way", trademarkStatus: "registered", type: "combo", industry: "Cloud Services", style: "Professional", prompt: "Cloud computing services with personalized approach" },
    { id: 6, name: "FreshBite Co.", slogan: "Taste the Difference", trademarkStatus: "available", type: "combo", industry: "Food", style: "Friendly", prompt: "Fresh food company emphasizing quality and taste" },
    { id: 7, name: "NextGen Academy", slogan: "Learning Without Limits", trademarkStatus: "unknown", type: "combo", industry: "Education", style: "Progressive", prompt: "Modern educational institution focused on unlimited learning" },
    { id: 8, name: "PurePath", slogan: "Clarity in Every Step", trademarkStatus: "available", type: "combo", industry: "Consulting", style: "Clean", prompt: "Business consulting firm providing clear strategic guidance" },
    { id: 9, name: "BlueWave Media", slogan: "Making Waves in Digital", trademarkStatus: "pending", type: "combo", industry: "Media", style: "Dynamic", prompt: "Digital media company creating impactful content" },
    { id: 10, name: "Zenith Labs", slogan: "Peak Performance Solutions", trademarkStatus: "available", type: "combo", industry: "Research", style: "Scientific", prompt: "Research laboratory focused on achieving peak performance" }
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
              placeholder="Search brand names and slogans..."
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
                    Company/Product Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your company or product name"
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
                    <option value="fitness">Fitness & Wellness</option>
                    <option value="environmental">Environmental</option>
                    <option value="media">Media & Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">Professional</Button>
                    <Button variant="outline" className="justify-start">Creative</Button>
                    <Button variant="outline" className="justify-start">Friendly</Button>
                    <Button variant="outline" className="justify-start">Bold</Button>
                    <Button variant="outline" className="justify-start">Elegant</Button>
                    <Button variant="outline" className="justify-start">Playful</Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Young professionals, Families, Businesses"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Values/Attributes
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Describe your brand values, unique selling points, or key attributes..."
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
                'Generate Names & Slogans'
              )}
            </Button>
          </div>
        </aside>

        {/* Right Panel - Brand Names & Slogans Grid */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Generated Brand Names & Slogans</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loading cards */}
            {isGenerating && (
              <>
                {Array.from({ length: 10 }, (_, i) => (
                  <Card key={`loading-${i}`} className="animate-pulse">
                    <CardContent className="px-4 py-0">
                      <div className="space-y-4">
                        {/* Name placeholder */}
                        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                        
                        {/* Slogan placeholder */}
                        <div className="h-4 bg-gray-100 rounded w-full"></div>
                        
                        {/* Trademark status placeholder */}
                        <div className="h-5 bg-gray-100 rounded w-1/2"></div>
                        
                        {/* Button placeholder */}
                        <div className="h-7 bg-gray-100 rounded w-full"></div>
                      </div>
                      <div className="flex items-center justify-center mt-3">
                        <Loader2 className="w-5 h-5 animate-spin" style={{ color: BRAND_COLORS.blue }} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
            
            {/* Actual content */}
            {showContent && brandData.map((brand) => (
              <Card key={brand.id} className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="px-4 py-0">
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{brand.name}</h3>
                    </div>
                    
                    {/* Slogan */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 italic">&ldquo;{brand.slogan}&rdquo;</p>
                    </div>
                    
                    {/* Trademark Status - More Prominent */}
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded border ${getTrademarkStatusColor(brand.trademarkStatus)} ${getTrademarkStatusBorder(brand.trademarkStatus)}`}>
                        {getTrademarkStatusText(brand.trademarkStatus).toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Verify Trademark Button */}
                    <div>
                      <Button 
                        size="sm" 
                        className="w-full text-sm font-medium py-1"
                        style={{ backgroundColor: BRAND_COLORS.blue, color: 'white' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVerifyTrademark(brand.id);
                        }}
                      >
                        Verify Trademark
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
              <Button variant="outline">Load More Names & Slogans</Button>
            </div>
          )}
        </main>

        {/* Brand Detail Sliding Panel */}
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 ${showBrandPanel ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleClosePanel}
          />
          
          {/* Sliding Panel */}
          <div className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-xl z-70 transform transition-all duration-300 ease-in-out ${showBrandPanel ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Brand Details</h3>
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
              {selectedBrandName && (
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Brand Preview */}
                  <div className="mb-6 text-center">
                    <div className="p-8 rounded-lg mb-4" style={{ backgroundColor: `${BRAND_COLORS.coral}10` }}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedBrandName.name}</h2>
                      <p className="text-xl font-medium text-gray-700 italic">&ldquo;{selectedBrandName.slogan}&rdquo;</p>
                    </div>
                  </div>

                  {/* Brand Information */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Prompt Used</h5>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedBrandName.prompt}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Industry</h5>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{selectedBrandName.industry}</span>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Style</h5>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{selectedBrandName.style}</span>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Type</h5>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full capitalize">{selectedBrandName.type}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full" style={{ backgroundColor: BRAND_COLORS.lime, color: BRAND_COLORS.darkBlue }}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Name & Slogan
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Name Only
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Slogan Only
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share className="w-4 h-4 mr-2" />
                      Share Brand
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
