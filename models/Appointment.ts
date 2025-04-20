import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    service: {
      type: String,
      required: [true, 'Please specify a service'],
      enum: ['Consultation', 'Project Discussion', 'Technical Support', 'Demo', 'Other'],
    },
    date: {
      type: Date,
      required: [true, 'Please specify an appointment date'],
    },
    time: {
      type: String,
      required: [true, 'Please specify a time slot'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a brief description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      maxlength: [1000, 'Notes cannot be more than 1000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);