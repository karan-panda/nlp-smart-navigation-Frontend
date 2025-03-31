"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaMortarPestle, FaSpa, FaBook } from "react-icons/fa";

export default function AyurvedaHub() {
    return (
      <div style={{ padding: '10px', backgroundColor: '#F5F5DC', color: '#333', minHeight: '100vh', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.h1 
          style={{ color: '#8B4513', textAlign: 'center', marginBottom: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}>
          <FaLeaf style={{ marginRight: '10px' }} /> Ayurveda Hub
        </motion.h1>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}>
          <FaMortarPestle style={{ color: '#8B4513', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Discover the power of Ayurvedic herbs for a balanced and healthy life.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.4 }}>
          <FaSpa style={{ color: '#8B4513', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Experience rejuvenation through Ayurvedic therapies and wellness practices.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.6 }}>
          <FaBook style={{ color: '#8B4513', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Learn about Ayurvedic principles and their benefits for holistic healing.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px' }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.8 }}>
          <FaLeaf style={{ color: '#8B4513', fontSize: '24px', marginRight: '10px' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
            Stay updated with the latest trends in Ayurveda, from detox plans to mindful living.
          </p>
        </motion.div>
        <div style={{height:"50px"}}></div>
      </div>
    );
}