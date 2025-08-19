"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Download, Heart, Share, FileText, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function ImagesTextProject() {
  const [activeTab, setActiveTab] = useState<'images' | 'text'>('images');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-xl text-gray-700 font-medium">Vaia</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search images & text..."
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
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Left Panel - Input Controls */}
        <aside className="w-80 bg-white border-r p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Images / Text Generator</h2>
              <p className="text-sm text-gray-600 mb-6">Create stunning images and compelling text content</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Type
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select content type</option>
                  <option value="marketing">Marketing Content</option>
                  <option value="social">Social Media</option>
                  <option value="blog">Blog Post</option>
                  <option value="product">Product Description</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="announcement">Announcement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic / Subject
                </label>
                <Input
                  type="text"
                  placeholder="Enter your topic or subject"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience
                </label>
                <Input
                  type="text"
                  placeholder="Who is your target audience?"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Style & Tone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">Professional</Button>
                  <Button variant="outline" className="justify-start">Casual</Button>
                  <Button variant="outline" className="justify-start">Creative</Button>
                  <Button variant="outline" className="justify-start">Friendly</Button>
                  <Button variant="outline" className="justify-start">Formal</Button>
                  <Button variant="outline" className="justify-start">Playful</Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Theme
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Any specific requirements, keywords, or style preferences..."
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Generate Content
              </Button>
            </div>
          </div>
        </aside>

        {/* Right Panel - Content Display with Tabs */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-gray-900">Generated Content</h1>
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'images'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 inline mr-2" />
                  Images
                </button>
                <button
                  onClick={() => setActiveTab('text')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'text'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Text
                </button>
              </div>
            </div>
            <p className="text-gray-600">
              {activeTab === 'images' 
                ? 'Click on any image to customize or download' 
                : 'Click on any text to edit or copy'}
            </p>
          </div>

          {/* Images Tab Content */}
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }, (_, i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg flex flex-col items-center justify-center mb-3 relative overflow-hidden text-white">
                      <div className="text-center p-4">
                        <ImageIcon className="w-8 h-8 mb-2 mx-auto opacity-80" />
                        <h3 className="font-bold text-sm mb-1">
                          {i % 3 === 0 ? 'Marketing Image' : i % 3 === 1 ? 'Social Media Post' : 'Product Visual'}
                        </h3>
                        <p className="text-xs opacity-70">
                          {i % 3 === 0 ? '1200x800px' : i % 3 === 1 ? '1080x1080px' : '800x600px'}
                        </p>
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
                      <span className="text-sm text-gray-600">Image {i + 1}</span>
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
          )}

          {/* Text Tab Content */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              {Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {i % 3 === 0 ? 'Marketing Copy' : i % 3 === 1 ? 'Blog Post Excerpt' : 'Product Description'}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {i % 3 === 0 ? 'Promotional content' : i % 3 === 1 ? 'Blog content' : 'Product content'}
                          </p>
                        </div>
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
                    
                    <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                      {i % 3 === 0 && (
                        <>
                          <p className="mb-3">🚀 <strong>Transform Your Business Today!</strong></p>
                          <p className="text-sm leading-relaxed">
                            Discover innovative solutions that drive growth and success. Our cutting-edge approach 
                            combines industry expertise with modern technology to deliver exceptional results for your business.
                          </p>
                        </>
                      )}
                      {i % 3 === 1 && (
                        <>
                          <p className="mb-3">📝 <strong>The Future of Digital Innovation</strong></p>
                          <p className="text-sm leading-relaxed">
                            In today's rapidly evolving digital landscape, staying ahead means embracing change and 
                            leveraging technology to create meaningful connections with your audience. Here's how to get started...
                          </p>
                        </>
                      )}
                      {i % 3 === 2 && (
                        <>
                          <p className="mb-3">⭐ <strong>Premium Quality Product</strong></p>
                          <p className="text-sm leading-relaxed">
                            Crafted with precision and attention to detail, this product offers unmatched quality and performance. 
                            Perfect for professionals who demand excellence in every aspect of their work.
                          </p>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        {i % 3 === 0 ? '42 words' : i % 3 === 1 ? '38 words' : '36 words'}
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Copy Text
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="flex justify-center mt-8">
            <Button variant="outline">
              Load More {activeTab === 'images' ? 'Images' : 'Text'}
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}