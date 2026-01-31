import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Hammer, 
  Paintbrush, 
  Droplets, 
  Layers, 
  HelpCircle,
  Home,
  Building2,
  Factory,
  Upload,
  Phone,
  Mail,
  User,
  Building
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { locations } from '@/lib/data';

const formSchema = z.object({
  service: z.string().min(1, 'Selecteer een dienst'),
  projectType: z.enum(['woning', 'commercieel', 'industrieel']),
  surfaceArea: z.number().min(1, 'Vul een geldige oppervlakte in').optional(),
  floorCondition: z.string().optional(),
  timeline: z.string().optional(),
  address: z.string().min(1, 'Vul uw adres in'),
  postalCode: z.string().regex(/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/, 'Vul een geldige postcode in'),
  city: z.string().min(1, 'Selecteer een stad'),
  accessibility: z.string().optional(),
  name: z.string().min(2, 'Vul uw naam in'),
  email: z.string().email('Vul een geldig e-mailadres in'),
  phone: z.string().regex(/^([+]?[0-9]{1,4}[-\s]?)?[0-9]{8,10}$/, 'Vul een geldig telefoonnummer in'),
  companyName: z.string().optional(),
  preferredContact: z.enum(['telefoon', 'email']),
  additionalInfo: z.string().optional(),
  foundVia: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const services = [
  { id: 'betonreparatie', label: 'Betonreparatie / Betonrenovatie', icon: Hammer },
  { id: 'coating', label: 'Coating / Vloercoating', icon: Paintbrush },
  { id: 'gietvloer', label: 'Gietvloer / Designvloer', icon: Layers },
  { id: 'waterdicht', label: 'Kelderafdichting / Waterdicht maken', icon: Droplets },
  { id: 'overig', label: 'Overig / Ik weet het niet zeker', icon: HelpCircle }
];

const projectTypes = [
  { id: 'woning', label: 'Woning / Particulier', icon: Home },
  { id: 'commercieel', label: 'Commercieel / Kantoor', icon: Building2 },
  { id: 'industrieel', label: 'Industrieel / Fabriek', icon: Factory }
];

const timelines = [
  { value: 'binnen-1-maand', label: 'Binnen 1 maand' },
  { value: '1-3-maanden', label: '1-3 maanden' },
  { value: '3-6-maanden', label: '3-6 maanden' },
  { value: 'flexibel', label: 'Flexibel / Nog niet zeker' }
];

const foundViaOptions = [
  { value: 'google', label: 'Google zoeken' },
  { value: 'aanbeveling', label: 'Aanbeveling / Mond-tot-mond' },
  { value: 'social-media', label: 'Social media' },
  { value: 'advertentie', label: 'Advertentie' },
  { value: 'anders', label: 'Anders' }
];

interface QuoteFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export function QuoteForm({ onSubmit, className }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      preferredContact: 'telefoon'
    }
  });

  const selectedService = watch('service');
  const selectedProjectType = watch('projectType');

  const validateStep = async () => {
    const fieldsToValidate: Record<number, (keyof FormData)[]> = {
      1: ['service'],
      2: ['projectType'],
      3: ['address', 'postalCode', 'city'],
      4: ['name', 'email', 'phone'],
      5: []
    };

    const result = await trigger(fieldsToValidate[step]);
    return result;
  };

  const nextStep = async () => {
    const isValidStep = await validateStep();
    if (isValidStep && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFormSubmit = (data: FormData) => {
    if (onSubmit) {
      onSubmit(data);
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-solidbp-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-solidbp-success" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Bedankt voor uw aanvraag!</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We hebben uw offerteaanvraag ontvangen. U krijgt binnen 24 uur een reactie van ons team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.location.href = '/'} variant="outline">
            Terug naar home
          </Button>
          <Button onClick={() => window.location.href = '/projecten'}>
            Bekijk onze projecten
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-2xl shadow-card p-6 md:p-8", className)}>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Stap {step} van {totalSteps}</span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-solidbp-blue"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Welke dienst heeft u nodig?</h3>
              <p className="text-muted-foreground mb-6">Selecteer de dienst die het beste bij uw project past.</p>
              
              <RadioGroup
                value={selectedService}
                onValueChange={(value) => setValue('service', value)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Label
                      key={service.id}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                        selectedService === service.id
                          ? "border-solidbp-blue bg-solidbp-blue/5"
                          : "border-border hover:border-solidbp-blue/50"
                      )}
                    >
                      <RadioGroupItem value={service.id} className="sr-only" />
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center",
                        selectedService === service.id
                          ? "bg-solidbp-blue text-white"
                          : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-medium">{service.label}</span>
                    </Label>
                  );
                })}
              </RadioGroup>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Project details</h3>
              <p className="text-muted-foreground mb-6">Vertel ons meer over uw project.</p>
              
              <div className="space-y-6">
                <div>
                  <Label className="mb-3 block">Projecttype</Label>
                  <RadioGroup
                    value={selectedProjectType}
                    onValueChange={(value: 'woning' | 'commercieel' | 'industrieel') => setValue('projectType', value)}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <Label
                          key={type.id}
                          className={cn(
                            "flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all text-center",
                            selectedProjectType === type.id
                              ? "border-solidbp-blue bg-solidbp-blue/5"
                              : "border-border hover:border-solidbp-blue/50"
                          )}
                        >
                          <RadioGroupItem value={type.id} className="sr-only" />
                          <Icon className={cn(
                            "w-8 h-8",
                            selectedProjectType === type.id ? "text-solidbp-blue" : "text-muted-foreground"
                          )} />
                          <span className="font-medium text-sm">{type.label}</span>
                        </Label>
                      );
                    })}
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="surfaceArea" className="mb-2 block">Oppervlakte (m²)</Label>
                    <Input
                      id="surfaceArea"
                      type="number"
                      placeholder="Bijv. 100"
                      {...register('surfaceArea', { valueAsNumber: true })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline" className="mb-2 block">Gewenste startdatum</Label>
                    <Select onValueChange={(value) => setValue('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer..." />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="floorCondition" className="mb-2 block">Huidige vloerconditie</Label>
                  <Textarea
                    id="floorCondition"
                    placeholder="Beschrijf de huidige staat van de vloer..."
                    {...register('floorCondition')}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Location */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Locatie</h3>
              <p className="text-muted-foreground mb-6">Waar moet het werk worden uitgevoerd?</p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address" className="mb-2 block">Adres *</Label>
                  <Input
                    id="address"
                    placeholder="Straatnaam en huisnummer"
                    {...register('address')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postalCode" className="mb-2 block">Postcode *</Label>
                    <Input
                      id="postalCode"
                      placeholder="1234 AB"
                      {...register('postalCode')}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city" className="mb-2 block">Stad *</Label>
                    <Select onValueChange={(value) => setValue('city', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer stad..." />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.slug} value={location.name}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="accessibility" className="mb-2 block">Bereikbaarheid / Opmerkingen</Label>
                  <Textarea
                    id="accessibility"
                    placeholder="Verdieping, parkeergelegenheid, speciale instructies..."
                    {...register('accessibility')}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Contactgegevens</h3>
              <p className="text-muted-foreground mb-6">Hoe kunnen we u bereiken?</p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Naam *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Uw volledige naam"
                      className="pl-10"
                      {...register('name')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">E-mail *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="uw@email.nl"
                        className="pl-10"
                        {...register('email')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Telefoon *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12345678"
                        className="pl-10"
                        {...register('phone')}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="companyName" className="mb-2 block">Bedrijfsnaam (optioneel)</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="companyName"
                      placeholder="Uw bedrijfsnaam"
                      className="pl-10"
                      {...register('companyName')}
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Voorkeur contactmethode</Label>
                  <RadioGroup
                    defaultValue="telefoon"
                    onValueChange={(value: 'telefoon' | 'email') => setValue('preferredContact', value)}
                    className="flex gap-4"
                  >
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="telefoon" />
                      <span>Telefoon</span>
                    </Label>
                    <Label className="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="email" />
                      <span>E-mail</span>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Additional Info */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Aanvullende informatie</h3>
              <p className="text-muted-foreground mb-6">Deel extra details om ons te helpen uw offerte te optimaliseren.</p>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="additionalInfo" className="mb-2 block">Aanvullende informatie</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Vertel ons meer over uw project, wensen of vragen..."
                    rows={4}
                    {...register('additionalInfo')}
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Hoe heeft u ons gevonden?</Label>
                  <Select onValueChange={(value) => setValue('foundVia', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer..." />
                    </SelectTrigger>
                    <SelectContent>
                      {foundViaOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block">Foto's uploaden (optioneel)</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-solidbp-blue/50 transition-colors cursor-pointer">
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground mb-2">
                      Sleep foto's hierheen of klik om te uploaden
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Max. 5MB per bestand (JPG, PNG)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className={cn(step === 1 && "invisible")}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Terug
          </Button>
          
          {step < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
            >
              Volgende
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-solidbp-orange hover:bg-solidbp-orange-dark"
            >
              Offerte aanvragen
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
