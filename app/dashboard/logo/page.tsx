"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Download, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BRAND_COLORS } from "@/lib/theme";

export default function LogoProject() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.lightGray }}>
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
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

      <div className="flex h-screen">
        {/* Left Panel - Input Controls */}
        <aside className="w-80 bg-white border-r p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Logo Generator</h2>
              <p className="text-sm text-gray-600 mb-6">Create unique logos for your brand using AI</p>
            </div>

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

              <Button className="w-full text-white" style={{ backgroundColor: BRAND_COLORS.blue }}>
                Generate Logos
              </Button>
            </div>
          </div>
        </aside>

        {/* Right Panel - Logo Grid */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Generated Logos</h1>
            <p className="text-gray-600">Click on any logo to customize or download</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sample Logo Cards */}
            {Array.from({ length: 12 }, (_, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square rounded-lg flex items-center justify-center mb-3 relative overflow-hidden" style={{ background: i % 4 === 0 ? `linear-gradient(135deg, ${BRAND_COLORS.blue} 0%, ${BRAND_COLORS.darkBlue} 100%)` : i % 4 === 1 ? `linear-gradient(135deg, ${BRAND_COLORS.lime} 0%, ${BRAND_COLORS.blue} 100%)` : i % 4 === 2 ? `linear-gradient(135deg, ${BRAND_COLORS.coral} 0%, ${BRAND_COLORS.darkBlue} 100%)` : BRAND_COLORS.darkBlue }}>
                    <div className="font-bold text-xl" style={{ color: i % 4 === 2 ? 'white' : i % 4 === 1 ? BRAND_COLORS.darkBlue : BRAND_COLORS.lime }}>
                      {i % 3 === 0 ? 'VAIA' : i % 3 === 1 ? 'V' : '🚀'}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Logo {i + 1}</span>
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
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Logos</Button>
          </div>
        </main>
      </div>
    </div>
  );
}