"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@saree.com", "support@saree.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 876-5432", "+1 (555) 876-5433"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Fashion Street", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat-Sun: 10AM-4PM"],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with us for any questions, support, or feedback. We're here to help!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" required />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We'd love to hear from you. Whether you have a question about our products, need help with an
                    order, or want to share feedback, we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* FAQ Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-gray-900">How long does shipping take?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-gray-900">What is your return policy?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        We offer a 30-day return policy for all unused items in their original packaging.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-gray-900">Do you ship internationally?</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Yes, we ship to most countries worldwide. Shipping costs vary by location.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}
