"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, Plus, Edit3, Copy, MoreVertical, Home, Activity, Users, Folder, Share, Clock, Star, Trash, Database, Globe, History, Lock, Sparkles, Image, Palette, Lightbulb, MessageCircle, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

export default function BrandKitsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const brandKits = [
    {
      id: 1,
      name: "Tech Startup Brand",
      colors: [BRAND_COLORS.blue, BRAND_COLORS.darkBlue, "#FFFFFF", "#F8F9FA"],
      fonts: ["Inter", "Roboto"],
      count: 6,
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      name: "Creative Agency Brand",
      colors: [BRAND_COLORS.lime, BRAND_COLORS.coral, BRAND_COLORS.darkBlue, "#FFFFFF"],
      fonts: ["Poppins", "Open Sans"],
      count: 6,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      name: "Corporate Professional",
      colors: [BRAND_COLORS.darkBlue, "#CCCCCC", "#FFFFFF", "#000000"],
      fonts: ["Helvetica", "Arial"],
      count: 6,
      lastUpdated: "3 days ago"
    },
    {
      id: 4,
      name: "Modern Minimalist",
      colors: [BRAND_COLORS.blue, "#F5F5F5", "#FFFFFF", "#333333"],
      fonts: ["Montserrat", "Lato"],
      count: 6,
      lastUpdated: "5 days ago"
    },
    {
      id: 5,
      name: "Vibrant Creative",
      colors: [BRAND_COLORS.coral, BRAND_COLORS.lime, "#FF8C42", "#6A4C93"],
      fonts: ["Nunito", "Source Sans Pro"],
      count: 6,
      lastUpdated: "1 day ago"
    },
    {
      id: 6,
      name: "Elegant Classic",
      colors: [BRAND_COLORS.darkBlue, "#D4AF37", "#FFFFFF", "#2C2C2C"],
      fonts: ["Playfair Display", "Merriweather"],
      count: 6,
      lastUpdated: "1 week ago"
    }
  ];

  const filteredBrandKits = brandKits.filter(kit => 
    kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kit.fonts.some(font => font.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.lightGray }}>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
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
              placeholder="Search brand kits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      <div className="flex pt-14">
        {/* Left Sidebar - Same as dashboard */}
        <aside className="w-64 bg-white fixed top-14 left-0 border-r flex flex-col h-[calc(100vh-3.5rem)]">
          <div className="p-4 flex-shrink-0">
            <Button 
              className="flex items-center space-x-3 w-full justify-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-white border-0 h-12" 
              style={{ backgroundColor: BRAND_COLORS.blue }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Create New</span>
            </Button>
          </div>

          <nav className="px-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="pb-6">
              {/* Core Navigation */}
              <div className="space-y-1">
                <Link href="/dashboard">
                  <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </Button>
                </Link>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Sparkles className="w-5 h-5" />
                  <span>Create</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Folder className="w-5 h-5" />
                  <span>Projects</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Clock className="w-5 h-5" />
                  <span>Recent</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Star className="w-5 h-5" />
                  <span>Favorites</span>
                </Button>
              </div>

              {/* Creative Resources */}
              <div className="mt-6 space-y-1">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Resources
                </div>
                <Link href="/dashboard/assets" className="block">
                  <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                    <Image className="w-5 h-5" />
                    <span>Assets</span>
                  </Button>
                </Link>
                <Link href="/dashboard/keywords" className="block">
                  <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                    <Search className="w-5 h-5" />
                    <span>Keywords</span>
                  </Button>
                </Link>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 rounded-r-full" style={{ color: BRAND_COLORS.blue, backgroundColor: `${BRAND_COLORS.blue}15` }}>
                  <Palette className="w-5 h-5" />
                  <span className="font-medium">Brand Kits</span>
                </Button>
              </div>

              {/* Collaboration */}
              <div className="mt-6 space-y-1">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Collaboration
                </div>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Users className="w-5 h-5" />
                  <span>Team Workspace</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Share className="w-5 h-5" />
                  <span>Shared with me</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <MessageCircle className="w-5 h-5" />
                  <span>Comments</span>
                </Button>
              </div>

              {/* Management */}
              <div className="mt-6 space-y-1">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Management
                </div>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Trash className="w-5 h-5" />
                  <span>Trash</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                  <Cloud className="w-5 h-5" />
                  <span>Storage</span>
                </Button>
                <div className="px-3 text-xs text-gray-500 mt-1">15 GB of 15 GB used</div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Brand Kits</h1>
            <p className="text-gray-600">Manage your collection of brand kits with colors and fonts for different projects</p>
          </div>

          {/* Add New Brand Kit */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Create New Brand Kit</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kit Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter brand kit name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Colors
                </label>
                <div className="flex space-x-3 mb-2">
                  <div className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.darkBlue }}></div>
                  <div className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.blue }}></div>
                  <div className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.lime }}></div>
                  <div className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer" style={{ backgroundColor: BRAND_COLORS.coral }}></div>
                  <div className="w-12 h-12 bg-white rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-12 h-12 bg-black rounded border-2 border-gray-300 cursor-pointer"></div>
                </div>
                <p className="text-xs text-gray-500">
                  Click to select colors for your brand kit. You can choose up to 6 colors.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fonts
                </label>
                <Input
                  type="text"
                  placeholder="Enter font names separated by commas (e.g., Inter, Roboto, Poppins)"
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate font names with commas. Include both primary and secondary fonts.
                </p>
              </div>
              <div className="flex justify-end">
                <Button 
                  className="text-white font-medium"
                  style={{ backgroundColor: BRAND_COLORS.blue }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Brand Kit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Brand Kits List - One per row */}
          <div className="space-y-2">
            {filteredBrandKits.map((brandKit) => {
              return (
                <Card key={brandKit.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      {/* Left side - Main info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <h3 className="text-base font-medium text-gray-900">{brandKit.name}</h3>
                        </div>
                        
                        {/* Colors and Fonts Preview */}
                        <div className="space-y-3">
                          {/* Colors */}
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Colors</span>
                            <div className="flex space-x-2">
                              {brandKit.colors.map((color, index) => (
                                <div 
                                  key={index}
                                  className="w-8 h-8 rounded border border-gray-200 shadow-sm"
                                  style={{ backgroundColor: color }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Fonts */}
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Fonts</span>
                            <div className="flex flex-wrap gap-2">
                              {brandKit.fonts.map((font, index) => (
                                <span 
                                  key={index}
                                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                  style={{ fontFamily: font }}
                                >
                                  {font}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Actions */}
                      <div className="flex items-center space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredBrandKits.length === 0 && (
            <div className="text-center py-12">
              <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No brand kits found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search terms or create a new brand kit.</p>
              <Button style={{ backgroundColor: BRAND_COLORS.blue }}>
                <Plus className="w-4 h-4 mr-2" />
                Create New Brand Kit
              </Button>
            </div>
          )}
        </div>
        </main>
      </div>
    </div>
  );
}