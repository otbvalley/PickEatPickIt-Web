import { useState } from "react";
import {
  ChevronDown,
  Camera,
  User,
  ArrowLeft,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  vehicleType: string;
  vehicleBrand: string;
  plateNumber: string;
  guarantor1Name: string;
  guarantor1Phone: string;
  guarantor1Relationship: string;
  guarantor2Name: string;
  guarantor2Phone: string;
  guarantor2Relationship: string;
  previousWork: string;
  workDuration: string;
  referralCode: string;
  termsAccepted: boolean;
  bankName: string;
  accountNumber: string;
  accountName: string;
  availabilityTerms: boolean;
  fromDay: string;
  toDay: string;
  holidayAvailable: string;
  timeStart: string;
  timeEnd: string;
}

interface StepProps {
  formData: FormData;
  onChange: (field: string, value: string | boolean) => void;
  onNext: () => void;
  onBack?: () => void;
}

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
}

export default function RiderRegistration() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    vehicleType: "",
    vehicleBrand: "",
    plateNumber: "",
    guarantor1Name: "",
    guarantor1Phone: "",
    guarantor1Relationship: "",
    guarantor2Name: "",
    guarantor2Phone: "",
    guarantor2Relationship: "",
    previousWork: "",
    workDuration: "",
    referralCode: "",
    termsAccepted: false,
    bankName: "",
    accountNumber: "",
    accountName: "",
    availabilityTerms: false,
    fromDay: "Monday",
    toDay: "Friday",
    holidayAvailable: "Yes, I'm available",
    timeStart: "10:00 am",
    timeEnd: "6:00 pm",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            onChange={handleInputChange}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            onChange={handleInputChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            onChange={handleInputChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return <Step4 onNext={nextStep} onBack={prevStep} />;
      case 5:
        return (
          <Step5
            formData={formData}
            onChange={handleInputChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 6:
        return <Step6 />;
      default:
        return null;
    }
  };

  return <div className="min-h-screen bg-gray-50">{renderStep()}</div>;
}

// Step 1: Personal Information
function Step1({ formData, onChange, onNext }: StepProps) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Create Profile
          </h1>
          <button className="text-green-600 font-medium">Skip</button>
        </div>

        {/* Alert Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            Please Kindly provide the correct info below
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <input
            type="email"
            placeholder="contact mail*"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <div className="flex gap-2">
            <div className="w-20 px-4 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-700">
              +234
            </div>
            <input
              type="tel"
              placeholder="Contact Phone number*"
              value={formData.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className="flex-1 px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={formData.gender}
              onChange={(e) => onChange("gender", e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Next of Kin Name"
            value={formData.nextOfKinName}
            onChange={(e) => onChange("nextOfKinName", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <div className="flex gap-2">
            <div className="w-20 px-4 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-700">
              +234
            </div>
            <input
              type="tel"
              placeholder="Next of Kin Phone Number"
              value={formData.nextOfKinPhone}
              onChange={(e) => onChange("nextOfKinPhone", e.target.value)}
              className="flex-1 px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
            />
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 my-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            All details you provided must be true, accurate and non-misleading.
            In the event you provided wrong information, you shall be held
            liable for such misconduct
          </p>
        </div>

        {/* Vehicle Information */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <select
              value={formData.vehicleType}
              onChange={(e) => onChange("vehicleType", e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">Vehicle type</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="car">Car</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Vehicle Brand"
            value={formData.vehicleBrand}
            onChange={(e) => onChange("vehicleBrand", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <input
            type="text"
            placeholder="Plate Number"
            value={formData.plateNumber}
            onChange={(e) => onChange("plateNumber", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 2: Guarantor Information
function Step2({ formData, onChange, onNext, onBack }: StepProps) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Create Profile
            </h1>
          </div>
          <button className="text-green-600 font-medium">Skip</button>
        </div>

        {/* Alert Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            Please Kindly provide the correct info below
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Guarantor 1 Name"
            value={formData.guarantor1Name}
            onChange={(e) => onChange("guarantor1Name", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <div className="flex gap-2">
            <div className="w-20 px-4 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-700">
              +234
            </div>
            <input
              type="tel"
              placeholder="Guarantor Phone number*"
              value={formData.guarantor1Phone}
              onChange={(e) => onChange("guarantor1Phone", e.target.value)}
              className="flex-1 px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={formData.guarantor1Relationship}
              onChange={(e) =>
                onChange("guarantor1Relationship", e.target.value)
              }
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">Relationship</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="friend">Friend</option>
              <option value="relative">Relative</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Guarantor 2 Name"
            value={formData.guarantor2Name}
            onChange={(e) => onChange("guarantor2Name", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <div className="flex gap-2">
            <div className="w-20 px-4 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-700">
              +234
            </div>
            <input
              type="tel"
              placeholder="Guarantor Phone number*"
              value={formData.guarantor2Phone}
              onChange={(e) => onChange("guarantor2Phone", e.target.value)}
              className="flex-1 px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={formData.guarantor2Relationship}
              onChange={(e) =>
                onChange("guarantor2Relationship", e.target.value)
              }
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">Relationship</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="friend">Friend</option>
              <option value="relative">Relative</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 my-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            All details you provided must be true, accurate and non-misleading.
          </p>
        </div>

        {/* Previous Work */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Previous Place of Work"
            value={formData.previousWork}
            onChange={(e) => onChange("previousWork", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <div className="relative">
            <select
              value={formData.workDuration}
              onChange={(e) => onChange("workDuration", e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">How long did you work there for?</option>
              <option value="less-than-6">Less than 6 months</option>
              <option value="6-12">6 months - 1 year</option>
              <option value="1-2">1 - 2 years</option>
              <option value="more-than-2">More than 2 years</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Plate Number"
            value={formData.plateNumber}
            onChange={(e) => onChange("plateNumber", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />
        </div>

        {/* Referral Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            In order to make earn registration points and benefits, please enter
            you Referral code
          </p>
        </div>

        <input
          type="text"
          placeholder="Referral code"
          value={formData.referralCode}
          onChange={(e) => onChange("referralCode", e.target.value)}
          className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all mb-6"
        />

        {/* Terms Checkbox */}
        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => onChange("termsAccepted", e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500 mt-0.5"
          />
          <span className="text-gray-700 text-sm">
            I understand and agree with the{" "}
            <span className="text-green-600 font-medium">Terms</span> and{" "}
            <span className="text-green-600 font-medium">Conditions</span>
          </span>
        </label>

        {/* Continue Button */}
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 3: Bank Information
function Step3({ formData, onChange, onNext, onBack }: StepProps) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Create Profile
            </h1>
          </div>
          <button className="text-green-600 font-medium">Skip</button>
        </div>

        {/* Alert Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white font-bold text-sm">!</span>
          </div>
          <p className="text-green-700 text-sm">
            Please Kindly provide the correct info below
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <select
              value={formData.bankName}
              onChange={(e) => onChange("bankName", e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all appearance-none text-gray-700"
            >
              <option value="">Bank Name</option>
              <option value="access">Access Bank</option>
              <option value="gtb">GTBank</option>
              <option value="first">First Bank</option>
              <option value="uba">UBA</option>
              <option value="zenith">Zenith Bank</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Account Number"
            value={formData.accountNumber}
            onChange={(e) => onChange("accountNumber", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />

          <input
            type="text"
            placeholder="Name on Account"
            value={formData.accountName}
            onChange={(e) => onChange("accountName", e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-all"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 4: Verify Identity
function Step4({ onNext, onBack }: Step4Props) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Verify Idenity
            </h1>
          </div>
          <button className="text-green-600 font-medium">Skip</button>
        </div>

        {/* Upload Cards */}
        <div className="space-y-4 mb-8">
          {/* Driver's License Upload */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 rounded-full p-4">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Upload a picture of your
                </p>
                <p className="font-semibold text-gray-800">Driver's License</p>
                <p className="text-xs text-gray-500 mt-1">Choose Photo</p>
              </div>
            </div>
          </div>

          {/* Selfie Upload */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 rounded-full p-4">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-green-600 font-semibold mb-1">
                  Position your bare face
                </p>
                <p className="text-green-600 font-semibold">clearly in</p>
                <p className="text-green-600 font-semibold mb-2">the camera.</p>
                <p className="text-gray-600 text-sm">No face mask or glasses</p>
                <p className="text-xs text-gray-500 mt-1">Take photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
          <h3 className="text-green-600 font-semibold mb-3">Additional Info</h3>
          <p className="text-gray-600 text-sm">
            Please provide additional details if need be
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 5: Set Availability
function Step5({ formData, onChange, onNext, onBack }: StepProps) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Set Availability
            </h1>
          </div>
          <button className="text-green-600 font-medium">Skip</button>
        </div>

        {/* Availability Card */}
        <div className="bg-green-600 rounded-2xl p-6 mb-6">
          <div className="space-y-4">
            {/* From Day */}
            <div>
              <label className="text-white text-sm mb-2 block">From</label>
              <div className="relative">
                <select
                  value={formData.fromDay}
                  onChange={(e) => onChange("fromDay", e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none text-gray-800"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* To Day */}
            <div>
              <label className="text-white text-sm mb-2 block">To</label>
              <div className="relative">
                <select
                  value={formData.toDay}
                  onChange={(e) => onChange("toDay", e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none text-gray-800"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Holiday Availability */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Available during Holidays
              </label>
              <div className="relative">
                <select
                  value={formData.holidayAvailable}
                  onChange={(e) => onChange("holidayAvailable", e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none text-gray-800"
                >
                  <option>Yes, I'm available</option>
                  <option>No, I'm not available</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Time Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white text-sm mb-2 block">
                  Time Start
                </label>
                <div className="relative">
                  <select
                    value={formData.timeStart}
                    onChange={(e) => onChange("timeStart", e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none text-gray-800"
                  >
                    <option>8:00 am</option>
                    <option>9:00 am</option>
                    <option>10:00 am</option>
                    <option>11:00 am</option>
                    <option>12:00 pm</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-white text-sm mb-2 block">
                  Time End
                </label>
                <div className="relative">
                  <select
                    value={formData.timeEnd}
                    onChange={(e) => onChange("timeEnd", e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none text-gray-800"
                  >
                    <option>4:00 pm</option>
                    <option>5:00 pm</option>
                    <option>6:00 pm</option>
                    <option>7:00 pm</option>
                    <option>8:00 pm</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start gap-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.availabilityTerms}
            onChange={(e) => onChange("availabilityTerms", e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500 mt-0.5"
          />
          <span className="text-gray-700 text-sm">
            I understand and agree with the{" "}
            <span className="text-green-600 font-medium">Terms</span> and{" "}
            <span className="text-green-600 font-medium">Conditions</span>
          </span>
        </label>

        {/* Done Button */}
        <button
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Done
        </button>
      </div>
    </div>
  );
}

// Step 6: Success Screen
function Step6() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-6 w-full">
        {/* Chat Icon */}
        <div className="flex justify-end mb-8">
          <div className="bg-white rounded-full p-3 shadow-lg border-2 border-green-500">
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>

        {/* Success Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          You're all set up
        </h1>

        {/* Illustration */}
        <div className="flex justify-center items-center mb-12 relative">
          {/* Person Illustration */}
          <div className="relative">
            <svg
              width="120"
              height="200"
              viewBox="0 0 120 200"
              className="animate-float"
            >
              {/* Person */}
              <ellipse
                cx="60"
                cy="180"
                rx="30"
                ry="8"
                fill="#e5e7eb"
                opacity="0.5"
              />
              <rect
                x="45"
                y="120"
                width="30"
                height="60"
                fill="#1f2937"
                rx="15"
              />
              <rect
                x="35"
                y="80"
                width="50"
                height="50"
                fill="#10b981"
                rx="10"
              />
              <circle cx="60" cy="40" r="25" fill="#fbbf24" />
              <path
                d="M 50 35 Q 60 30 70 35"
                stroke="#1f2937"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="53" cy="38" r="2" fill="#1f2937" />
              <circle cx="67" cy="38" r="2" fill="#1f2937" />
            </svg>

            {/* Document Cards */}
            <div className="absolute -right-24 top-8 bg-white rounded-lg shadow-lg p-3 border-2 border-gray-200 w-20 animate-slideInRight">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-1 bg-green-500 rounded"></div>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="space-y-1">
                <div className="w-12 h-1 bg-gray-200 rounded"></div>
                <div className="w-10 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div
              className="absolute -right-16 top-28 bg-white rounded-lg shadow-lg p-3 border-2 border-gray-200 w-20 animate-slideInRight"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="space-y-1">
                <div className="w-12 h-1 bg-gray-200 rounded"></div>
                <div className="w-10 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div
              className="absolute -right-8 top-48 bg-white rounded-lg shadow-lg p-3 border-2 border-gray-200 w-20 animate-slideInRight"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="space-y-1">
                <div className="w-12 h-1 bg-gray-200 rounded"></div>
                <div className="w-10 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-base leading-relaxed">
            We'll notify you via mail or text message when
            <br />
            your application has been approved.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-gray-100 rounded-2xl p-6 mb-8">
          <p className="text-gray-600 text-sm font-medium mb-4">
            Only reach out to our support team if:
          </p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>You don't get a mail from us after 7 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>You need to change any details you need</span>
            </li>
          </ul>
        </div>
        <Link to="/rider-login">
          {/* Done Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
            Done
          </button>
        </Link>

        {/* Animations */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-slideInRight {
            animation: slideInRight 0.6s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
