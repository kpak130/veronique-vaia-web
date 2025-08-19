"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, Upload, Image as ImageIcon, Download, Heart, Share, MoreVertical, Home, Activity, Users, Folder, Clock, Star, Trash, Database, Globe, History, Lock, Sparkles, Palette, Lightbulb, MessageCircle, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

export default function AssetsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const assets = [
    {
      id: 1,
      name: "Company Logo",
      url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
      type: "PNG",
      size: "2.4 MB",
      uploadDate: "2 days ago",
      dimensions: "1200x800"
    },
    {
      id: 2,
      name: "Product Hero Image",
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
      type: "JPG",
      size: "3.1 MB",
      uploadDate: "1 week ago",
      dimensions: "1920x1080"
    },
    {
      id: 3,
      name: "Team Photo",
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      type: "JPG",
      size: "4.2 MB",
      uploadDate: "3 days ago",
      dimensions: "1600x1200"
    },
    {
      id: 4,
      name: "Brand Pattern",
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      type: "PNG",
      size: "1.8 MB",
      uploadDate: "5 days ago",
      dimensions: "800x800"
    },
    {
      id: 5,
      name: "Office Interior",
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      type: "JPG",
      size: "5.6 MB",
      uploadDate: "1 week ago",
      dimensions: "2400x1600"
    },
    {
      id: 6,
      name: "Product Mockup",
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      type: "PNG",
      size: "3.8 MB",
      uploadDate: "2 weeks ago",
      dimensions: "1500x1000"
    },
    {
      id: 7,
      name: "Background Texture",
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
      type: "JPG",
      size: "2.1 MB",
      uploadDate: "3 weeks ago",
      dimensions: "1920x1280"
    },
    {
      id: 8,
      name: "Icon Set",
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
      type: "SVG",
      size: "450 KB",
      uploadDate: "1 month ago",
      dimensions: "512x512"
    }
  ];

  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Handle file drop logic here
    console.log("Files dropped");
  };

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
              placeholder="Search assets..."
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
        {/* Left Sidebar - Same as other pages */}
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
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 rounded-r-full" style={{ color: BRAND_COLORS.blue, backgroundColor: `${BRAND_COLORS.blue}15` }}>
                  <ImageIcon className="w-5 h-5" />
                  <span className="font-medium">Assets</span>
                </Button>
                <Link href="/dashboard/keywords" className="block">
                  <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                    <Search className="w-5 h-5" />
                    <span>Keywords</span>
                  </Button>
                </Link>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assets</h1>
              <p className="text-gray-600">Manage your image assets and upload new files</p>
            </div>

            {/* Upload Section */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Images</h3>
                  <p className="text-gray-600 mb-4">Drag and drop your images here, or click to browse</p>
                  <Button 
                    className="text-white font-medium"
                    style={{ backgroundColor: BRAND_COLORS.blue }}
                  >
                    Choose Files
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">
                    Supports PNG, JPG, GIF, SVG up to 10MB each
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Assets Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredAssets.map((asset) => (
                <Card key={asset.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-lg mb-3 relative overflow-hidden bg-gray-100">
                      <img 
                        src={asset.url}
                        alt={asset.name}
                        className="w-full h-full object-cover"
                      />
                      
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
                    
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm truncate">{asset.name}</h4>
                        <p className="text-xs text-gray-500">{asset.type} • {asset.size}</p>
                        <p className="text-xs text-gray-500">{asset.dimensions}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Uploaded {asset.uploadDate}</span>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="w-6 h-6">
                            <Heart className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-6 h-6">
                            <Share className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-6 h-6">
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredAssets.length === 0 && (
              <div className="text-center py-12">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No assets found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search terms or upload some images.</p>
                <Button style={{ backgroundColor: BRAND_COLORS.blue }}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Images
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}