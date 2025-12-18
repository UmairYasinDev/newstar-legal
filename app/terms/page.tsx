"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Users, Cloud, AlertTriangle, Scale, Link as LinkIcon, MessageSquare, UserX, Lock } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: FileCheck,
      title: "Welcome to New Star!",
      subtitle: "Acceptance of Terms",
      content: "These terms and conditions outline the rules and regulations for the use of New Star's Website and mobile application, located at https://newstarinternet.com.\n\nBy accessing this website or using our mobile application, we assume you accept these terms and conditions. Do not continue to use New Star if you do not agree to all of the terms and conditions stated on this page.\n\nUsing the app constitutes your acceptance of these terms.",
    },
    {
      icon: Users,
      title: "Terminology",
      content: "\"Client\", \"You\" and \"Your\" refers to you, the person using this website or application. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\" refers to our Company. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in accordance with and subject to prevailing law of Pakistan.",
    },
    {
      icon: Lock,
      title: "Account Security & JWT Authentication",
      subtitle: "Authentication & Account Security",
      content: "Your account is secured using JWT (JSON Web Tokens) and HttpOnly Cookies. You are responsible for:\n• Maintaining the confidentiality of your login credentials\n• All activities that occur under your account\n• Notifying us immediately of any unauthorized access\n\nProhibited Security Actions:\n• Attempting to tamper with JWT tokens\n• Reverse-engineering authentication mechanisms\n• Sharing your account credentials with others\n• Using automated tools to access the service\n\nTermination: We reserve the right to immediately terminate accounts that engage in security violations, including but not limited to JWT tampering, unauthorized access attempts, or malicious scraping.",
    },
    {
      icon: Cloud,
      title: "User-Generated Content & Cloudinary Hosting",
      subtitle: "User Content & Media Uploads",
      content: "Parts of our service allow you to upload images and other content.\n\nOwnership: You retain full ownership of all content you upload, including profile pictures and documents. However, by uploading content, you grant New Star a non-exclusive, worldwide, royalty-free license to host, store, display, and process your content as necessary to provide our services.\n\nCloudinary Storage: All uploaded images are processed and stored via Cloudinary, our third-party media management service. By uploading content, you also agree to Cloudinary's Terms of Service.\n\nContent Guidelines: You warrant that uploaded content:\n• Does not violate any intellectual property rights\n• Does not contain unlawful, harmful, or offensive material\n• Complies with applicable laws and regulations",
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      subtitle: "Prohibited Use",
      content: "You must NOT:\n• Upload illegal, harmful, threatening, or offensive content\n• Attempt to gain unauthorized access to our systems or databases\n• Use automated scraping or data mining tools\n• Tamper with authentication tokens or session cookies\n• Distribute malware or viruses through our platform\n• Impersonate other users or entities\n• Violate any local, national, or international laws\n\nViolations may result in immediate account termination and legal action.",
    },
    {
      icon: Shield,
      title: "Cookies",
      content: "We employ the use of cookies. By accessing New Star, you agree to use cookies in agreement with New Star's Privacy Policy. Most interactive websites use cookies to retrieve user details for each visit.",
    },
    {
      icon: Scale,
      title: "License & Intellectual Property",
      content: "Unless otherwise stated, New Star and/or its licensors own the intellectual property rights for all material on New Star. All intellectual property rights are reserved. You may access this from New Star for your own personal use subject to restrictions set in these terms and conditions.\n\nYou must not:\n• Republish material from New Star\n• Sell, rent or sub-license material\n• Reproduce or duplicate material\n• Redistribute content from New Star",
    },
    {
      icon: MessageSquare,
      title: "User Comments & Warranties",
      content: "Parts of this service offer an opportunity for users to post and exchange opinions and information. New Star does not filter, edit, publish or review Comments prior to their presence on the website. Comments reflect the views and opinions of the person who posts their views and opinions.\n\nYou warrant that:\n• You are entitled to post the Comments on our platform\n• Comments do not invade any intellectual property right\n• Comments do not contain unlawful material\n• Comments will not be used to solicit business or promote illegal activities",
    },
    {
      icon: LinkIcon,
      title: "Hyperlinking",
      content: "Certain organizations may link to our Website without prior written approval, including government agencies, search engines, news organizations, and online directory distributors. These organizations may link to our home page or publications so long as the link is not deceptive and does not falsely imply sponsorship or endorsement.",
    },
    {
      icon: Shield,
      title: "Content Liability",
      content: "We shall not be held responsible for any content that appears on third-party websites linking to us. You agree to protect and defend us against all claims that arise from such content. No links should appear on any Website that may be interpreted as libelous, obscene or criminal.",
    },
    {
      icon: FileCheck,
      title: "Reservation of Rights",
      content: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions at any time. By continuing to use our service, you agree to be bound by the current version of these terms.",
    },
    {
      icon: UserX,
      title: "Account Termination & Data Deletion",
      subtitle: "Data Deletion & Account Termination",
      content: "You may request account deletion at any time by contacting support@newstarinternet.com. Upon deletion:\n• Your account will be permanently disabled\n• Personal data will be removed from our PostgreSQL database within 30 days\n• Uploaded images will be removed from Cloudinary storage\n• Some anonymized data may be retained for legal/compliance purposes\n• Backup copies will be purged during the next backup cycle (maximum 90 days)\n\nWe reserve the right to terminate accounts that violate these terms without prior notice.",
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We do not ensure that the information on this website is correct, and we do not warrant its completeness or accuracy.\n\nImportant: As long as the website and services are provided, we will not be liable for any loss or damage of any nature beyond what is required by applicable consumer protection laws.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-light/20">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary p-8 text-center shadow-2xl md:p-12">
            <Scale className="mx-auto mb-4 h-16 w-16 text-secondary animate-scale-in" />
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
            <p className="text-lg text-primary-light">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-primary-light">
              <p>
                <strong className="text-white">Company:</strong> New Star
              </p>
              <p>
                <strong className="text-white">Website:</strong>{" "}
                <a href="https://newstarinternet.com" className="text-secondary hover:underline">
                  newstarinternet.com
                </a>
              </p>
              <p>
                <strong className="text-white">Effective Date:</strong> December 16, 2025
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="group border-2 transition-all duration-300 hover:border-primary hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <section.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                      {section.subtitle && (
                        <p className="mt-1 text-sm text-gray-500">{section.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-2 border-secondary/50 bg-secondary/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Questions? If you have any questions about our Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong className="text-primary">Email:</strong>{" "}
                  <a href="mailto:support@newstarinternet.com" className="text-secondary hover:underline">
                    support@newstarinternet.com
                  </a>
                </li>
                <li>
                  <strong className="text-primary">Address:</strong> Shah Jamal Lahore, 54100, Pakistan
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
