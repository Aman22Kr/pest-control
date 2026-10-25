import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/servicesData';
import { AdBanner } from '../components/AdBanner';
import {
  ShieldCheck,
  Calculator,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Sparkles,
  ClipboardCheck
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addQuote } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [pestType, setPestType] = useState('Subterranean Termites');
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial'>('Residential');
  const [sqFt, setSqFt] = useState(2200);
  const [foundationType, setFoundationType] = useState('Slab Foundation');
  const [severity, setSeverity] = useState<'Preventive' | 'Mild' | 'Moderate' | 'Severe Emergency'>('Moderate');

  // Contact & Scheduling
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (8:00 AM - 12:00 PM)');

  // Submission State
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  // Pre-fill from query params if available
  useEffect(() => {
    const pestParam = searchParams.get('pest');
    if (pestParam) setPestType(pestParam);

    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const match = SERVICES.find((s) => s.id === serviceParam);
      if (match) {
        setPestType(match.targetedPests[0] || 'General Multi-Pest');
        if (match.category === 'Commercial') setPropertyType('Commercial');
      }
    }

    const zipParam = searchParams.get('zip');
    if (zipParam) setZipCode(zipParam);

    // Default preferred date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, [searchParams]);

  // Price Calculation Logic
  const calculateEstimate = () => {
    let base = 199;
    if (pestType.toLowerCase().includes('termite')) base = 480;
    else if (pestType.toLowerCase().includes('bed bug')) base = 690;
    else if (pestType.toLowerCase().includes('rodent') || pestType.toLowerCase().includes('rat')) base = 340;
    else if (pestType.toLowerCase().includes('wasp') || pestType.toLowerCase().includes('hornet')) base = 210;

    // Sq Ft adjustment
    const sqFtMultiplier = sqFt > 2500 ? 1.35 : sqFt > 1500 ? 1.15 : 1.0;

    // Severity multiplier
    const severityMultiplier =
      severity === 'Severe Emergency' ? 1.4 :
      severity === 'Moderate' ? 1.15 :
      severity === 'Mild' ? 1.0 : 0.85;

    // Commercial adjustment
    const commercialMultiplier = propertyType === 'Commercial' ? 1.4 : 1.0;

    const total = Math.round(base * sqFtMultiplier * severityMultiplier * commercialMultiplier);
    return `$${total - 30} - $${total + 40}`;
  };

  const estimatedRange = calculateEstimate();

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !address || !zipCode) {
      alert('Please fill out all contact fields to reserve your technician slot.');
      return;
    }

    const booking = addQuote({
      pestType,
      propertyType,
      squareFeet: sqFt,
      severity,
      fullName,
      phone,
      email,
      address,
      zipCode,
      preferredDate: `${preferredDate} (${preferredSlot})`,
      estimatedPrice: estimatedRange
    });

    setConfirmedBooking(booking);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
              Transparent Cost Modeling
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Instant Quote & Inspection Booking
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Calculate an accurate, upfront estimate for your property size and pest infestation level, then lock in your guaranteed on-site inspection window.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {confirmedBooking ? (
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-lg border border-emerald-300 shadow-md text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <ClipboardCheck className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                Inspection Slot Confirmed
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Technician Dispatched for {confirmedBooking.fullName}
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Dispatch Reference: {confirmedBooking.id}
              </p>
            </div>

            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Your appointment request has been synchronized with our local field dispatch fleet. A senior state-licensed technician will arrive equipped with digital diagnostic tools and thermal sensors.
            </p>

            <div className="bg-slate-50 p-5 rounded-lg text-left text-xs space-y-2.5 border border-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Service Target:</span>
                <span className="font-semibold text-slate-900">{confirmedBooking.pestType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Property Details:</span>
                <span className="font-semibold text-slate-900">
                  {confirmedBooking.propertyType} ({confirmedBooking.squareFeet} sq ft)
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Scheduled Date & Time:</span>
                <span className="font-semibold text-emerald-900">{confirmedBooking.preferredDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Address:</span>
                <span className="font-semibold text-slate-900">{confirmedBooking.address}, {confirmedBooking.zipCode}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">Estimated Treatment Cost:</span>
                <span className="font-bold font-mono text-emerald-950 text-sm">{confirmedBooking.estimatedPrice}</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 italic">
              Need immediate emergency service sooner? Call dispatch directly at <strong className="text-slate-800">1-800-PEST-NOW</strong>.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/saved"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded hover:bg-emerald-700 transition-colors"
              >
                View in My Saved Bookings
              </Link>
              <Link
                to="/"
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Step-by-Step Form */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-8">
              {/* Step Navigation Pill Indicator */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-1.5 ${step === 1 ? 'text-emerald-800 font-bold' : 'text-slate-400'}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center border text-[11px]">1</span>
                  <span>Target Pest</span>
                </button>
                <span className="text-slate-300">→</span>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-1.5 ${step === 2 ? 'text-emerald-800 font-bold' : 'text-slate-400'}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center border text-[11px]">2</span>
                  <span>Property Details</span>
                </button>
                <span className="text-slate-300">→</span>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`flex items-center gap-1.5 ${step === 3 ? 'text-emerald-800 font-bold' : 'text-slate-400'}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center border text-[11px]">3</span>
                  <span>Severity</span>
                </button>
                <span className="text-slate-300">→</span>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className={`flex items-center gap-1.5 ${step === 4 ? 'text-emerald-800 font-bold' : 'text-slate-400'}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center border text-[11px]">4</span>
                  <span>Schedule & Submit</span>
                </button>
              </div>

              {/* Step 1: Pest Choice */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 1: Which pest is affecting your property?
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Choose the primary pest or select general multi-pest if unsure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Subterranean Termites', desc: 'Mud tubes, hollow wood, discarded wings' },
                      { name: 'Norway Rats & Mice', desc: 'Droppings, scratching in attic, gnawed food' },
                      { name: 'Bed Bugs', desc: 'Bites in bed, blood spots, mattress seams' },
                      { name: 'German Cockroaches', desc: 'Kitchen counters, appliances, pepper frass' },
                      { name: 'Carpenter Ants', desc: 'Sawdust frass, large black ants on walls' },
                      { name: 'Yellow Jackets & Hornets', desc: 'Underground or eaves paper nests, stings' },
                      { name: 'Spiders (Widow / Recluse)', desc: 'Crawlspaces, chaotic low-ground webs' },
                      { name: 'General Multi-Pest Home Shield', desc: 'Seasonal preventive perimeter protection' }
                    ].map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setPestType(p.name)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          pestType === p.name
                            ? 'border-emerald-700 bg-emerald-50/50 ring-1 ring-emerald-700'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="font-semibold text-xs text-slate-900">{p.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                    >
                      Next: Property Details →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Property Type & Size */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 2: Property Type & Dimensions
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Enables precise calculation of foundation perimeter and required linear barrier gallons.
                    </p>
                  </div>

                  {/* Property Type Radio */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPropertyType('Residential')}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        propertyType === 'Residential'
                          ? 'border-emerald-700 bg-emerald-50 font-bold text-emerald-950'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Residential Home / Townhouse
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('Commercial')}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        propertyType === 'Commercial'
                          ? 'border-emerald-700 bg-emerald-50 font-bold text-emerald-950'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Commercial Facility / Dining
                    </button>
                  </div>

                  {/* Square footage slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700">Estimated Total Square Footage:</span>
                      <span className="font-mono font-bold text-slate-900 text-sm">{sqFt.toLocaleString()} sq ft</span>
                    </div>
                    <input
                      type="range"
                      min={800}
                      max={6000}
                      step={100}
                      value={sqFt}
                      onChange={(e) => setSqFt(parseInt(e.target.value, 10))}
                      className="w-full accent-emerald-800 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>800 sq ft</span>
                      <span>2,500 sq ft</span>
                      <span>6,000+ sq ft</span>
                    </div>
                  </div>

                  {/* Foundation Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 block">Foundation Structure</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {['Slab Foundation', 'Crawlspace', 'Full Basement'].map((f) => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setFoundationType(f)}
                          className={`p-2.5 rounded border text-center transition-all ${
                            foundationType === f
                              ? 'border-emerald-700 bg-emerald-50 font-semibold text-emerald-900'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded hover:bg-slate-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                    >
                      Next: Infestation Severity →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Severity */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 3: What is the current activity level?
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Determines whether emergency thermal knockdown or routine perimeter barrier is needed.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        level: 'Preventive' as const,
                        label: 'Preventative / Pre-Purchase Inspection',
                        detail: 'No visible active insects; establishing proactive seasonal perimeter shields.'
                      },
                      {
                        level: 'Mild' as const,
                        label: 'Mild / Occasional Sightings',
                        detail: 'Periodic sightings of single insects or solitary mouse activity in garage.'
                      },
                      {
                        level: 'Moderate' as const,
                        label: 'Moderate / Persistent Daily Activity',
                        detail: 'Regular sightings in living areas, multiple droppings, or noticeable wood hollows.'
                      },
                      {
                        level: 'Severe Emergency' as const,
                        label: 'Severe Emergency / Structural Infestation',
                        detail: 'Active termite swarms, severe bed bug bites, chewing inside walls, or commercial audit failure.'
                      }
                    ].map((item) => (
                      <button
                        key={item.level}
                        type="button"
                        onClick={() => setSeverity(item.level)}
                        className={`w-full p-4 rounded-lg border text-left transition-all ${
                          severity === item.level
                            ? 'border-emerald-700 bg-emerald-50/50 ring-1 ring-emerald-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-slate-900">{item.label}</span>
                          <span className="text-[11px] font-mono text-emerald-800 font-semibold">{item.level}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded hover:bg-slate-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors"
                    >
                      Next: Schedule Visit →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Schedule & Contact Info */}
              {step === 4 && (
                <form onSubmit={handleSubmitBooking} className="space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Step 4: Contact & Dispatch Scheduling
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our dispatch coordinators lock in your chosen inspection slot and text technician arrival telemetry.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Miller"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Direct Phone Number (for SMS dispatch)</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">5-Digit ZIP Code</label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        placeholder="90210"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1 text-xs">Service Street Address</label>
                    <input
                      type="text"
                      required
                      placeholder="450 Whispering Pines Lane"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Date & Slot selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Preferred Inspection Date</label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Time Window</label>
                      <select
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none"
                      >
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 7:00 PM)">Late Afternoon (4:00 PM - 7:00 PM)</option>
                        <option value="Emergency Priority (Within 2 Hours)">Emergency Priority (Within 2 Hours)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded hover:bg-slate-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 rounded-md transition-colors shadow-md"
                    >
                      Confirm & Book Dispatch
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Dynamic Calculation Breakdown */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm sticky top-24 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>Real-Time Cost Estimate</span>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Estimated Treatment Range</div>
                  <div className="text-3xl font-extrabold font-mono text-slate-900 mt-1">
                    {estimatedRange}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    *Exact quote confirmed on-site upon acoustic and thermal scope inspection. Inspection fee is 100% credited toward treatment.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Species:</span>
                    <span className="font-semibold text-slate-800 text-right">{pestType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Property Scale:</span>
                    <span className="font-semibold text-slate-800">{sqFt.toLocaleString()} sq ft ({propertyType})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Substructure:</span>
                    <span className="font-semibold text-slate-800">{foundationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Infestation Index:</span>
                    <span className="font-semibold text-emerald-800">{severity}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Includes 30-Day Zero-Pest Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>EPA Registered Botanical Formulations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>No Cancellation or Rescheduling Fees</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="tel:18007378669"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Prefer speaking with an entomologist? Call now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
