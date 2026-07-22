import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Send, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import MagneticLink from './MagneticLink';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bordeaux-glow font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-silver"
          >
            Let's Build <span className="text-gradient-bordeaux">Together</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-silver mb-6 sm:mb-8">Contact Information</h3>
            <p className="text-silver/60 text-base sm:text-lg mb-8 sm:mb-12 max-w-md">
              Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative collaborations.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: <Mail />, label: 'Email', value: 'Mohamedbentaher250@gmail.com' },
                { icon: <MessageCircle />, label: 'WhatsApp', value: '+971 55 905 4601' },
                { icon: <Phone />, label: 'Phone', value: '+971 52 113 6151' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-bordeaux-glow group-hover:bg-bordeaux group-hover:text-silver transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-silver/40 uppercase tracking-widest font-mono mb-1">{item.label}</p>
                    <p className="text-base sm:text-lg font-medium text-silver">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <p className="text-xs text-silver/40 uppercase tracking-widest font-mono mb-6">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram />, href: '#' },
                  { icon: <Twitter />, href: '#' },
                  { icon: <Linkedin />, href: '#' },
                  { icon: <Github />, href: '#' }
                ].map((item, i) => (
                  <MagneticLink
                    key={i}
                    href={item.href}
                    className="w-12 h-12 rounded-xl glass text-silver/60 hover:text-bordeaux-glow border-silver/5"
                  >
                    {item.icon}
                  </MagneticLink>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 lg:p-12 rounded-[30px] sm:rounded-[40px] border-silver/5 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bordeaux/10 blur-[60px] rounded-full -z-10" />
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-silver/50 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-navy-deep/50 border border-silver/5 rounded-2xl text-silver focus:outline-none focus:border-bordeaux transition-colors placeholder:text-silver/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-silver/50 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-navy-deep/50 border border-silver/5 rounded-2xl text-silver focus:outline-none focus:border-bordeaux transition-colors placeholder:text-silver/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-silver/50 ml-1">Project Type</label>
                <select className="w-full px-6 py-4 bg-navy-deep/50 border border-silver/5 rounded-2xl text-silver focus:outline-none focus:border-bordeaux transition-colors appearance-none cursor-pointer">
                  <option>Web Design & Dev</option>
                  <option>Mobile Application</option>
                  <option>UI/UX Overhaul</option>
                  <option>Branding Identity</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-silver/50 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-navy-deep/50 border border-silver/5 rounded-2xl text-silver focus:outline-none focus:border-bordeaux transition-colors placeholder:text-silver/20 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-bordeaux hover:bg-bordeaux-light text-silver rounded-2xl font-bold flex items-center justify-center gap-3 transition-all glow-red shadow-bordeaux"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
