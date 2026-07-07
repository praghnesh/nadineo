import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, MapPin, Sparkles, Clock, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  service: string;
  requests: string;
}

interface BookingViewProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
  onSubmitSuccess: (data: BookingDetails) => void;
  goBack: () => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  selectedService,
  setSelectedService,
  onSubmitSuccess,
  goBack,
}) => {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    service: '',
    requests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const serviceOptions = [
    'Signature Haircut & Style',
    'Luxury Hair Coloring',
    'Intense Hair Restoration Treatment',
    'Nourishing Hair Spa',
    'Brazilian Keratin Blowout',
    'Glass Skin Facial',
    'Acne Control Facial',
    'Premium Whitening Facial',
    'Eyebrow Grooming & Threading',
    'Premium Eyelash Extensions',
    'Underarm Waxing (Honey)',
    'Bridal Makeup & Styling',
    'Glam Party / Event Makeup',
    'Fresh Everyday Makeup',
    'Classic Spa Manicure',
    'Classic Spa Pedicure',
    'Premium Gel Polish (Hands/Feet)',
    'Custom Nail Art detailing',
    'Relaxing Swedish Massage',
    'Signature Home Spa Ritual',
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof BookingDetails]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: Partial<Record<keyof BookingDetails, string>> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    
    const cleanPhone = formData.phone.replace(/\D/g, ''); // strip non-digits
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10 || cleanPhone.length > 12) {
      tempErrors.phone = 'Enter a valid mobile number (10 to 12 digits)';
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }

    if (!formData.address.trim()) tempErrors.address = 'Complete home address is required';
    if (!formData.service) tempErrors.service = 'Please select a service';
    if (!formData.date) tempErrors.date = 'Preferred date is required';
    if (!formData.time) tempErrors.time = 'Preferred time slot is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(formData);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        date: '',
        time: '',
        service: '',
        requests: '',
      });
      setSelectedService('');
    }, 1200);
  };

  return (
    <div className="booking-view section-padding">
      <div className="container booking-layout-container">
        
        {/* Form container */}
        <motion.div 
          className="booking-card card-premium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button 
            type="button" 
            className="booking-back-btn"
            onClick={goBack}
            aria-label="Go Back"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <div className="booking-form-header">
            <div className="decor-spark">
              <Sparkles size={16} />
            </div>
            <h2>Schedule Pampering</h2>
            <p>Fill out the form below. Nadine will confirm service coverage in your location.</p>
          </div>

          <form onSubmit={handleSubmit} className="premium-form">
            
            {/* Input Row: Name & Phone */}
            <div className="form-row-double">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juanita Dela Cruz"
                    className={errors.name ? 'error' : ''}
                  />
                </div>
                {errors.name && <span className="error-msg"><AlertCircle size={12} /> {errors.name}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrapper">
                  <Phone size={16} className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="09171234567"
                    className={errors.phone ? 'error' : ''}
                  />
                </div>
                {errors.phone && <span className="error-msg"><AlertCircle size={12} /> {errors.phone}</span>}
              </div>
            </div>

            {/* Input Row: Email & Address */}
            <div className="form-row-double">
              <div className="input-group">
                <label htmlFor="email">Email Address (Optional)</label>
                <div className="input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="juanita@gmail.com"
                    className={errors.email ? 'error' : ''}
                  />
                </div>
                {errors.email && <span className="error-msg"><AlertCircle size={12} /> {errors.email}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="service">Select Service</label>
                <div className="input-wrapper">
                  <Sparkles size={16} className="input-icon" />
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={errors.service ? 'error' : ''}
                  >
                    <option value="">-- Choose Treatment --</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                {errors.service && <span className="error-msg"><AlertCircle size={12} /> {errors.service}</span>}
              </div>
            </div>

            {/* Address Input */}
            <div className="input-group full-width">
              <label htmlFor="address">Complete Address (Dasmariñas City, Cavite)</label>
              <div className="input-wrapper">
                <MapPin size={16} className="input-icon" />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House No, Street, Subdivision/Barangay, Dasmariñas City, Cavite"
                  className={errors.address ? 'error' : ''}
                />
              </div>
              {errors.address && <span className="error-msg"><AlertCircle size={12} /> {errors.address}</span>}
            </div>

            {/* Date & Time */}
            <div className="form-row-double">
              <div className="input-group">
                <label htmlFor="date">Preferred Date</label>
                <div className="input-wrapper">
                  <Calendar size={16} className="input-icon" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]} // Block past dates
                    className={errors.date ? 'error' : ''}
                  />
                </div>
                {errors.date && <span className="error-msg"><AlertCircle size={12} /> {errors.date}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="time">Preferred Time Slot</label>
                <div className="input-wrapper">
                  <Clock size={16} className="input-icon" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={errors.time ? 'error' : ''}
                  >
                    <option value="">-- Choose Slot --</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                {errors.time && <span className="error-msg"><AlertCircle size={12} /> {errors.time}</span>}
              </div>
            </div>

            {/* Special Request */}
            <div className="input-group full-width">
              <label htmlFor="requests">Special Requests / Hair or Skin details (Optional)</label>
              <textarea
                id="requests"
                name="requests"
                rows={3}
                value={formData.requests}
                onChange={handleInputChange}
                placeholder="List any skin allergies, hair length, color history, or gate codes for subdivision security."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary submit-booking-btn"
            >
              {isSubmitting ? (
                <span>Requesting slot...</span>
              ) : (
                <>
                  <Calendar size={16} className="btn-icon-left" />
                  <span>Request Booking Appointment</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .booking-view {
          background: var(--bg-gradient);
          padding-top: calc(var(--header-height) + 40px);
        }

        .booking-layout-container {
          display: flex;
          justify-content: center;
        }

        .booking-card {
          width: 100%;
          max-width: 720px;
          background: var(--bg-card);
          padding: 40px;
        }

        .booking-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: var(--accent);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          margin-bottom: 24px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .booking-back-btn:hover {
          background: rgba(183, 110, 121, 0.05);
          color: var(--accent-hover);
          transform: translateX(-2px);
        }

        @media (max-width: 768px) {
          .booking-card {
            padding: 24px 16px;
          }
        }

        .booking-form-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .decor-spark {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }

        .booking-form-header h2 {
          font-size: 28px;
          margin-bottom: 6px;
        }

        .booking-form-header p {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* Form styling */
        .premium-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .form-row-double {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-group label {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-main);
          letter-spacing: 0.2px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--accent);
          pointer-events: none;
        }

        .input-wrapper input,
        .input-wrapper select,
        .input-group textarea {
          width: 100%;
          padding: 12px 14px 12px 42px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: var(--text-main);
          background: rgba(183, 110, 121, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          outline: none;
          transition: all var(--transition-normal);
        }

        .input-group textarea {
          padding: 12px 14px;
          resize: vertical;
        }

        .input-wrapper input:focus,
        .input-wrapper select:focus,
        .input-group textarea:focus {
          border-color: var(--accent);
          background: var(--bg-pure);
          box-shadow: 0 0 0 3px rgba(183, 110, 121, 0.08);
        }

        /* Error States */
        .input-wrapper input.error,
        .input-wrapper select.error {
          border-color: #E06C75;
          background: rgba(224, 108, 117, 0.02);
        }

        .error-msg {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #E06C75;
          font-size: 11px;
          font-weight: 400;
          margin-top: 2px;
        }

        .submit-booking-btn {
          width: 100%;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 6px 20px rgba(183, 110, 121, 0.25);
          border: none;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};
