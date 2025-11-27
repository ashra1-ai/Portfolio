import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      // Check if EmailJS is configured
      if (!serviceID || !templateID || !publicKey || 
          serviceID === 'YOUR_SERVICE_ID' || 
          serviceID === 'service_xxxxxxxxx' ||
          serviceID.startsWith('YOUR_') ||
          templateID === 'YOUR_TEMPLATE_ID' || 
          templateID === 'template_xxxxxxxxx' ||
          templateID.startsWith('YOUR_') ||
          publicKey === 'YOUR_PUBLIC_KEY' ||
          publicKey === 'xxxxxxxxxxxxxxxxxxxxx' ||
          publicKey.startsWith('YOUR_')) {
        throw new Error('EmailJS not configured. Please set up EmailJS credentials. See EMAILJS_SETUP.md for instructions.')
      }
      
      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          message: formData.message,
          time: new Date().toLocaleString(),
          // Additional fields for reference
          from_email: formData.email,
          subject: formData.subject,
        },
        publicKey
      )
      
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFocusedField(null)
      setErrors({})
      
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      const errorMessage = error.message?.includes('not configured') 
        ? 'Email service is currently being set up. For immediate contact, please email me directly at kanishkashra@gmail.com or use the email link above.'
        : 'Unable to send message at this time. Please email me directly at kanishkashra@gmail.com or try again later.'
      setErrors({ submit: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kanishkashra@gmail.com',
      link: 'mailto:kanishkashra@gmail.com',
      color: 'accent-primary',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '(+1) 780-554-3993',
      link: 'tel:+17805543993',
      color: 'accent-secondary',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Edmonton, AB, Canada',
      link: '#',
      color: 'accent-tertiary',
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/kanishkashra/', label: 'LinkedIn', color: 'accent-secondary' },
    { icon: FaGithub, link: 'https://github.com/ashra1-ai', label: 'GitHub', color: 'accent-primary' },
  ]

  const getColorClasses = (color) => {
    const colors = {
      'accent-primary': {
        text: 'text-accent-primary',
        border: 'border-accent-primary',
        bg: 'bg-accent-primary',
      },
      'accent-secondary': {
        text: 'text-accent-secondary',
        border: 'border-accent-secondary',
        bg: 'bg-accent-secondary',
      },
      'accent-tertiary': {
        text: 'text-accent-tertiary',
        border: 'border-accent-tertiary',
        bg: 'bg-accent-tertiary',
      },
    }
    return colors[color] || colors['accent-primary']
  }

  return (
    <section id="contact" className="section-container relative bg-dark-bg">

      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Get In <span className="text-accent-primary">Touch</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Let's discuss your next backend project or ML system
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-accent-primary">
              Let's Connect
            </h3>
            <p className="text-lg text-neutral-text-medium mb-10 leading-relaxed">
              I'm always open to discussing backend architecture, ML systems, or infrastructure challenges.
            </p>

            {/* Enhanced Contact Details */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const colors = getColorClasses(info.color)
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="card-interactive flex items-center space-x-4 p-5 group relative overflow-hidden"
                  >
                    <div className={`p-4 border-2 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10 ${
                      info.color === 'accent-primary'
                        ? 'bg-accent-primary/20 border-accent-primary/40 group-hover:bg-accent-primary/30 group-hover:border-accent-primary'
                        : info.color === 'accent-secondary'
                        ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover:bg-accent-secondary/30 group-hover:border-accent-secondary'
                        : 'bg-accent-tertiary/20 border-accent-tertiary/40 group-hover:bg-accent-tertiary/30 group-hover:border-accent-tertiary'
                    }`}>
                      <Icon className={`${colors.text} text-2xl transition-transform duration-300`} />
                    </div>
                    <div className="relative z-10 flex-1">
                      <p className="text-xs text-neutral-text-medium font-bold uppercase tracking-wider mb-1">{info.label}</p>
                      <p className={`${colors.text} font-semibold text-base group-hover:translate-x-1 transition-transform duration-300`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-neutral-text-medium mb-4 font-medium text-sm uppercase tracking-wide">Follow Me</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  const colors = getColorClasses(social.color)
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 border-2 rounded-xl hover:scale-110 transition-all duration-300 ${
                        social.color === 'accent-primary'
                          ? 'bg-accent-primary/20 border-accent-primary/30 hover:bg-accent-primary/40 text-accent-primary'
                          : social.color === 'accent-tertiary'
                          ? 'bg-accent-tertiary/20 border-accent-tertiary/30 hover:bg-accent-tertiary/40 text-accent-tertiary'
                          : 'bg-accent-secondary/20 border-accent-secondary/30 hover:bg-accent-secondary/40 text-accent-secondary'
                      }`}
                      aria-label={social.label}
                    >
                      <Icon className="text-2xl" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-accent-primary/20 border-2 border-accent-primary rounded-lg flex items-center gap-3 animate-slide-up">
                <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-accent-primary font-semibold">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {errors.submit && (
              <div className="mb-6 p-4 bg-accent-tertiary/20 border-2 border-accent-tertiary rounded-lg flex items-center gap-3 animate-slide-up">
                <svg className="w-6 h-6 text-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-accent-tertiary font-semibold text-sm">{errors.submit}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-neutral-text-medium font-semibold mb-2 text-sm flex items-center gap-2"
                  >
                    <span className="text-accent-primary">{'>'}</span>
                    <span>{field.label}</span>
                    {errors[field.id] && (
                      <span className="text-accent-tertiary text-xs ml-auto">{errors[field.id]}</span>
                    )}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    onFocus={() => {
                      setFocusedField(field.id)
                      if (errors[field.id]) setErrors(prev => ({ ...prev, [field.id]: '' }))
                    }}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 bg-dark-surface-1dp border-2 rounded-lg text-neutral-text focus:outline-none transition-all duration-300 placeholder-neutral-text-disabled ${
                      errors[field.id]
                        ? 'border-accent-tertiary'
                        : focusedField === field.id
                        ? 'border-accent-primary'
                        : 'border-dark-border hover:border-dark-border/70'
                    }`}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-text-medium font-semibold mb-2 text-sm flex items-center gap-2"
                >
                  <span className="text-accent-primary">{'>'}</span>
                  <span>Message</span>
                  {errors.message && (
                    <span className="text-accent-tertiary text-xs ml-auto">{errors.message}</span>
                  )}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => {
                    setFocusedField('message')
                    if (errors.message) setErrors(prev => ({ ...prev, message: '' }))
                  }}
                  onBlur={() => setFocusedField(null)}
                  rows="6"
                  className={`w-full px-4 py-3.5 bg-dark-surface-1dp border-2 rounded-lg text-neutral-text focus:outline-none transition-all duration-300 resize-none placeholder-neutral-text-disabled ${
                    errors.message
                      ? 'border-accent-tertiary'
                      : focusedField === 'message'
                      ? 'border-accent-primary'
                      : 'border-dark-border hover:border-dark-border/70'
                  }`}
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary relative overflow-hidden group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
