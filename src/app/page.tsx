"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Home, Users, HelpCircle, FileText, DollarSign, BookOpen, Mail, Check, Building2, Store, Building, Phone, ChevronLeft, Shield, Cpu, Zap, Users as UsersIcon, ChevronDown, ChevronUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeForm, setActiveForm] = useState(null)
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (activeForm && formRef.current) {
      const isMobile = window.innerWidth < 640 // Adjust this breakpoint as needed
      if (isMobile) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeForm])

  const navItems = [
    { name: 'Strona Główna', icon: Home },
    { name: 'O nas', icon: Users },
    { name: 'Jak to działa', icon: HelpCircle },
    { name: 'Formularze', icon: FileText },
    { name: 'Cennik', icon: DollarSign },
    { name: 'Blog', icon: BookOpen },
    { name: 'Kontakt', icon: Mail },
  ]

  const slides = [
    {
      title: "Uzyskaj certyfikat energetyczny",
      subtitle: "bez wychodzenia z domu",
      description: "Profesjonalne usługi, szybka realizacja i intuicyjny system. Wypełnij formularz online, a my zajmiemy się resztą.",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Oszczędzaj energię",
      subtitle: "i dbaj o środowisko",
      description: "Dowiedz się, jak efektywnie zarządzać energią w swoim domu lub firmie. Zainwestuj w przyszłość już dziś!",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Eksperci w dziedzinie",
      subtitle: "certyfikacji energetycznej",
      description: "Nasz zespół specjalistów pomoże Ci w każdym kroku procesu. Skorzystaj z naszego doświadczenia!",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const toggleForm = (formType) => {
    setActiveForm(activeForm === formType ? null : formType)
  }

  const renderHouseForm = () => (
    <form className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2">Dane podstawowe</h4>
        <div className="space-y-4">
          <div>
            <Label>Wybór metrażu</Label>
            <RadioGroup defaultValue="do100">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do100" id="do100" />
                  <Label htmlFor="do100">do 100 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do150" id="do150" />
                  <Label htmlFor="do150">do 150 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do200" id="do200" />
                  <Label htmlFor="do200">do 200 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do250" id="do250" />
                  <Label htmlFor="do250">do 250 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="powyzej250" id="powyzej250" />
                  <Label htmlFor="powyzej250">powyżej 250 m²</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label>Czas realizacji usługi</Label>
            <RadioGroup defaultValue="standard">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard do 5 dni</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express 24h</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="superexpress" id="superexpress" />
                  <Label htmlFor="superexpress">Superexpress 6h</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="additionalHelp" />
            <Label htmlFor="additionalHelp">Dodatkowa pomoc w zdobyciu informacji</Label>
          </div>
          <div>
            <Label htmlFor="purpose">Cel wykonania świadectwa</Label>
            <Select>
              <SelectTrigger id="purpose">
                <SelectValue placeholder="Wybierz cel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sprzedaz">Sprzedaż</SelectItem>
                <SelectItem value="wynajem">Wynajem</SelectItem>
                <SelectItem value="oddanie">Oddanie do użytkowania</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane adresowe</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="street">Ulica</Label>
            <Input id="street" />
          </div>
          <div>
            <Label htmlFor="buildingNumber">Numer budynku</Label>
            <Input id="buildingNumber" />
          </div>
          <div>
            <Label htmlFor="postalCode">Kod pocztowy</Label>
            <Input id="postalCode" />
          </div>
          <div>
            <Label htmlFor="city">Miasto</Label>
            <Input id="city" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane techniczne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="totalArea">Powierzchnia całkowita w m2</Label>
            <Input type="number" id="totalArea" />
          </div>
          <div>
            <Label htmlFor="usableArea">Powierzchnia użytkowa w m2</Label>
            <Input type="number" id="usableArea" />
          </div>
          <div>
            <Label htmlFor="roomHeight">Wysokość pomieszczeń w cm</Label>
            <Input type="number" id="roomHeight" />
          </div>
          <div>
            <Label htmlFor="heatingType">Rodzaj ogrzewania nieruchomości</Label>
            <Select>
              <SelectTrigger id="heatingType">
                <SelectValue placeholder="Wybierz rodzaj ogrzewania" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gazowe">Gazowe</SelectItem>
                <SelectItem value="elektryczne">Elektryczne</SelectItem>
                <SelectItem value="olejowe">Olejowe</SelectItem>
                <SelectItem value="weglowe">Węglowe</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane konstrukcyjne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="wallMaterial">Materiał ścian zewnętrznych</Label>
            <Select>
              <SelectTrigger id="wallMaterial">
                <SelectValue placeholder="Wybierz materiał" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cegla">Cegła</SelectItem>
                <SelectItem value="pustak">Pustak</SelectItem>
                <SelectItem value="beton">Beton</SelectItem>
                <SelectItem value="drewno">Drewno</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="wallThickness">Grubość ściany zewnętrznej bez izolacji w cm</Label>
            <Input type="number" id="wallThickness" />
          </div>
          <div>
            <Label htmlFor="insulationMaterial">Materiał izolacji zewnętrznej</Label>
            <Select>
              <SelectTrigger id="insulationMaterial">
                <SelectValue placeholder="Wybierz materiał izolacji" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="styropian">Styropian</SelectItem>
                <SelectItem value="welna">Wełna mineralna</SelectItem>
                <SelectItem value="pianka">Pianka PUR</SelectItem>
                <SelectItem value="brak">Brak izolacji</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="insulationThickness">Grubość materiału izolacyjnego w cm</Label>
            <Input type="number" id="insulationThickness" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dodatkowe informacje</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Klimatyzacja', 'Rekuperacja', 'Fotowoltaika', 'Balkon/taras',
            'Bufor/zbiornik ogrzewania', 'Bufor/zbiornik ciepłej wody',
            'Izolacja przewodów instalacji ogrzewania', 'Izolacja przewodów instalacji ciepłej wody',
            'Cyrkulacja ciepłej wody', 'Cyrkulacja ogrzewania', 'Piwnica', 'Poddasze użytkowe'
          ].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item.toLowerCase().replace(/\s+/g, '-')} />
              <Label htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane dotyczące dachu</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="roofType">Rodzaj dachu</Label>
            <Select>
              <SelectTrigger id="roofType">
                <SelectValue placeholder="Wybierz rodzaj dachu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plaski">Płaski</SelectItem>
                <SelectItem value="skosny">Skośny</SelectItem>
                <SelectItem value="mansardowy">Mansardowy</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="roofMaterials">Materiały pokrycia i izolacji dachu</Label>
            <Input id="roofMaterials" />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="additionalComments">Dodatkowy komentarz</Label>
        <Textarea id="additionalComments" />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Załączniki</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="exteriorPhoto">Zdjęcie budynku z zewnątrz (wymagane)</Label>
            <Input type="file" id="exteriorPhoto" required />
          </div>
          <div>
            <Label htmlFor="floorPlan">Rzut nieruchomości (opcjonalne)</Label>
            <Input type="file" id="floorPlan" />
          </div>
          <div>
            <Label htmlFor="buildingCertificate">Świadectwo całego budynku (opcjonalne)</Label>
            <Input type="file" id="buildingCertificate" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Wyślij formularz</Button>
    </form>
  )

  const renderApartmentForm = () => (
    <form className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2">Dane podstawowe</h4>
        <div className="space-y-4">
          <div>
            <Label>Wybór metrażu</Label>
            <RadioGroup defaultValue="do50">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do50" id="do50" />
                  <Label htmlFor="do50">do 50 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do70" id="do70" />
                  <Label htmlFor="do70">do 70 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do100" id="do100" />
                  <Label htmlFor="do100">do 100 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="powyzej100" id="powyzej100" />
                  <Label htmlFor="powyzej100">powyżej 100 m²</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label>Czas realizacji usługi</Label>
            <RadioGroup defaultValue="standard">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard do 3 dni</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express 24h</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="superexpress" id="superexpress" />
                  <Label htmlFor="superexpress">Superexpress 6h</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="additionalHelp" />
            <Label htmlFor="additionalHelp">Dodatkowa pomoc w zdobyciu informacji</Label>
          </div>
          <div>
            <Label htmlFor="purpose">Cel wykonania świadectwa</Label>
            <Select>
              <SelectTrigger id="purpose">
                <SelectValue placeholder="Wybierz cel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sprzedaz">Sprzedaż</SelectItem>
                <SelectItem value="wynajem">Wynajem</SelectItem>
                <SelectItem value="oddanie">Oddanie do użytkowania</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane adresowe</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="street">Ulica</Label>
            <Input id="street" />
          </div>
          <div>
            <Label htmlFor="buildingNumber">Numer budynku</Label>
            <Input id="buildingNumber" />
          </div>
          <div>
            <Label htmlFor="apartmentNumber">Numer mieszkania</Label>
            <Input id="apartmentNumber" />
          </div>
          <div>
            <Label htmlFor="postalCode">Kod pocztowy</Label>
            <Input id="postalCode" />
          </div>
          <div>
            <Label htmlFor="city">Miasto</Label>
            <Input id="city" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane techniczne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="usableArea">Powierzchnia użytkowa w m2</Label>
            <Input type="number" id="usableArea" />
          </div>
          <div>
            <Label htmlFor="roomHeight">Wysokość pomieszczeń w cm</Label>
            <Input type="number" id="roomHeight" />
          </div>
          <div>
            <Label htmlFor="externalWalls">Liczba ścian zewnętrznych</Label>
            <Input type="number" id="externalWalls" />
          </div>
          <div>
            <Label htmlFor="heatingType">Rodzaj ogrzewania nieruchomości</Label>
            <Select>
              <SelectTrigger id="heatingType">
                <SelectValue placeholder="Wybierz rodzaj ogrzewania" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gazowe">Gazowe</SelectItem>
                <SelectItem value="elektryczne">Elektryczne</SelectItem>
                <SelectItem value="olejowe">Olejowe</SelectItem>
                <SelectItem value="weglowe">Węglowe</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane konstrukcyjne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="wallMaterial">Materiał ścian zewnętrznych</Label>
            <Select>
              <SelectTrigger id="wallMaterial">
                <SelectValue placeholder="Wybierz materiał" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cegla">Cegła</SelectItem>
                <SelectItem value="pustak">Pustak</SelectItem>
                <SelectItem value="beton">Beton</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="wallThickness">Grubość ściany zewnętrznej bez izolacji w cm</Label>
            <Input type="number" id="wallThickness" />
          </div>
          <div>
            <Label htmlFor="insulationMaterial">Materiał izolacji zewnętrznej</Label>
            <Select>
              <SelectTrigger id="insulationMaterial">
                <SelectValue placeholder="Wybierz materiał izolacji" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="styropian">Styropian</SelectItem>
                <SelectItem value="welna">Wełna mineralna</SelectItem>
                <SelectItem value="pianka">Pianka PUR</SelectItem>
                <SelectItem value="brak">Brak izolacji</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="insulationThickness">Grubość materiału izolacyjnego w cm</Label>
            <Input type="number" id="insulationThickness" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dodatkowe informacje</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Klimatyzacja', 'Fotowoltaika', 'Balkon/taras', 'Mieszkanie na parterze', 'Mieszkanie na ostatnim piętrze'].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item.toLowerCase().replace(/\s+/g, '-')} />
              <Label htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="additionalComments">Dodatkowy komentarz</Label>
        <Textarea id="additionalComments" />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Załączniki</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="exteriorPhoto">Zdjęcie budynku z zewnątrz (wymagane)</Label>
            <Input type="file" id="exteriorPhoto" required />
          </div>
          <div>
            <Label htmlFor="floorPlan">Rzut nieruchomości (opcjonalne)</Label>
            <Input type="file" id="floorPlan" />
          </div>
          <div>
            <Label htmlFor="buildingCertificate">Świadectwo całego budynku (opcjonalne)</Label>
            <Input type="file" id="buildingCertificate" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Wyślij formularz</Button>
    </form>
  )

  const renderCommercialForm = () => (
    <form className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2">Dane podstawowe</h4>
        <div className="space-y-4">
          <div>
            <Label>Wybór metrażu</Label>
            <RadioGroup defaultValue="do50">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do50" id="do50" />
                  <Label htmlFor="do50">do 50 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do100" id="do100" />
                  <Label htmlFor="do100">do 100 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do150" id="do150" />
                  <Label htmlFor="do150">do 150 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do300" id="do300" />
                  <Label htmlFor="do300">do 300 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do500" id="do500" />
                  <Label htmlFor="do500">do 500 m²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="do750" id="do750" />
                  <Label htmlFor="do750">do 750 m²</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label>Czas realizacji usługi</Label>
            <RadioGroup defaultValue="standard">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard do 5 dni</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express 24h</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="superexpress" id="superexpress" />
                  <Label htmlFor="superexpress">Superexpress 6h</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="purpose">Cel wykonania świadectwa</Label>
            <Select>
              <SelectTrigger id="purpose">
                <SelectValue placeholder="Wybierz cel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sprzedaz">Sprzedaż</SelectItem>
                <SelectItem value="wynajem">Wynajem</SelectItem>
                <SelectItem value="oddanie">Oddanie do użytkowania</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane adresowe</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="street">Ulica</Label>
            <Input id="street" />
          </div>
          <div>
            <Label htmlFor="buildingNumber">Numer budynku</Label>
            <Input id="buildingNumber" />
          </div>
          <div>
            <Label htmlFor="localNumber">Numer lokalu</Label>
            <Input id="localNumber" />
          </div>
          <div>
            <Label htmlFor="postalCode">Kod pocztowy</Label>
            <Input id="postalCode" />
          </div>
          <div>
            <Label htmlFor="city">Miasto</Label>
            <Input id="city" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane techniczne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="function">Funkcja lokalu</Label>
            <Select>
              <SelectTrigger id="function">
                <SelectValue placeholder="Wybierz funkcję" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="biuro">Biuro</SelectItem>
                <SelectItem value="sklep">Sklep</SelectItem>
                <SelectItem value="magazyn">Magazyn</SelectItem>
                <SelectItem value="produkc ja">Produkcja</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="usableArea">Powierzchnia użytkowa w m2</Label>
            <Input type="number" id="usableArea" />
          </div>
          <div>
            <Label htmlFor="roomHeight">Wysokość pomieszczeń w cm</Label>
            <Input type="number"  id="roomHeight" />
          </div>
          <div>
            <Label htmlFor="externalWalls">Liczba ścian zewnętrznych</Label>
            <Input type="number" id="externalWalls" />
          </div>
          <div>
            <Label htmlFor="heatingType">Rodzaj ogrzewania nieruchomości</Label>
            <Select>
              <SelectTrigger id="heatingType">
                <SelectValue placeholder="Wybierz rodzaj ogrzewania" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gazowe">Gazowe</SelectItem>
                <SelectItem value="elektryczne">Elektryczne</SelectItem>
                <SelectItem value="olejowe">Olejowe</SelectItem>
                <SelectItem value="weglowe">Węglowe</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane konstrukcyjne</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="wallMaterial">Materiał ścian zewnętrznych</Label>
            <Select>
              <SelectTrigger id="wallMaterial">
                <SelectValue placeholder="Wybierz materiał" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cegla">Cegła</SelectItem>
                <SelectItem value="pustak">Pustak</SelectItem>
                <SelectItem value="beton">Beton</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="wallThickness">Grubość ściany zewnętrznej bez izolacji w cm</Label>
            <Input type="number" id="wallThickness" />
          </div>
          <div>
            <Label htmlFor="insulationMaterial">Materiał izolacji zewnętrznej</Label>
            <Select>
              <SelectTrigger id="insulationMaterial">
                <SelectValue placeholder="Wybierz materiał izolacji" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="styropian">Styropian</SelectItem>
                <SelectItem value="welna">Wełna mineralna</SelectItem>
                <SelectItem value="pianka">Pianka PUR</SelectItem>
                <SelectItem value="brak">Brak izolacji</SelectItem>
                <SelectItem value="inne">Inne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="insulationThickness">Grubość materiału izolacyjnego w cm</Label>
            <Input type="number" id="insulationThickness" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dodatkowe informacje</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Klimatyzacja', 'Rekuperacja', 'Fotowoltaika', 'Lokal z więcej niż jedną kondygnacją',
            'Lokal na parterze', 'Lokal na ostatnim piętrze', 'Lokal lub jego część pod ziemią'
          ].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item.toLowerCase().replace(/\s+/g, '-')} />
              <Label htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="additionalComments">Dodatkowy komentarz</Label>
        <Textarea id="additionalComments" />
      </div>

      <Button type="submit" className="w-full">Wyślij formularz</Button>
    </form>
  )

  const renderAtypicalForm = () => (
    <form className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2">Dane kontaktowe</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Imię</Label>
            <Input id="firstName" />
          </div>
          <div>
            <Label htmlFor="lastName">Nazwisko</Label>
            <Input id="lastName" />
          </div>
          <div>
            <Label htmlFor="email">Adres e-mail</Label>
            <Input type="email" id="email" />
          </div>
          <div>
            <Label htmlFor="phone">Numer telefonu</Label>
            <Input type="tel" id="phone" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dane nieruchomości</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="propertyType">Typ nieruchomości</Label>
            <Input id="propertyType" />
          </div>
          <div>
            <Label htmlFor="street">Ulica</Label>
            <Input id="street" />
          </div>
          <div>
            <Label htmlFor="buildingNumber">Numer budynku</Label>
            <Input id="buildingNumber" />
          </div>
          <div>
            <Label htmlFor="localNumber">Numer lokalu (opcjonalnie)</Label>
            <Input id="localNumber" />
          </div>
          <div>
            <Label htmlFor="postalCode">Kod pocztowy</Label>
            <Input id="postalCode" />
          </div>
          <div>
            <Label htmlFor="city">Miasto</Label>
            <Input id="city" />
          </div>
          <div>
            <Label htmlFor="constructionYear">Rok budowy</Label>
            <Input type="number" id="constructionYear" />
          </div>
          <div>
            <Label htmlFor="usableArea">Powierzchnia użytkowa</Label>
            <Input type="number" id="usableArea" />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="additionalComments">Dodatkowy komentarz</Label>
        <Textarea id="additionalComments" />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Wycena</h4>
        <div className="space-y-2">
          <Label htmlFor="areaRange">Powierzchnia pomieszczenia (500 - 20000 m²)</Label>
          <Input type="range" id="areaRange" min="500" max="20000" step="100" />
          <div>Orientacyjna cena: <span id="estimatedPrice">0</span> zł</div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Załączniki</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="exteriorPhoto">Zdjęcie zewnętrzne budynku (wymagane)</Label>
            <Input type="file" id="exteriorPhoto" required />
          </div>
          <div>
            <Label htmlFor="floorPlan">Rzut nieruchomości (opcjonalne)</Label>
            <Input type="file" id="floorPlan" />
          </div>
          <div>
            <Label htmlFor="buildingCertificate">Świadectwo całego budynku (opcjonalne)</Label>
            <Input type="file" id="buildingCertificate" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Akceptuję regulamin i wyrażam zgodę na przetwarzanie danych</Label>
      </div>

      <Button type="submit" className="w-full">Wyślij zapytanie</Button>
    </form>
  )

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-600' : 'bg-teal-600 sm:bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-white">EnergoCert</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-yellow-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">Uzyskaj certyfikat</Button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:bg-teal-700 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium text-center"
              >
                <item.icon className="inline-block w-5 h-5 mr-2" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-teal-700">
            <div className="mt-3 px-2 space-y-1">
              <Button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900">Uzyskaj certyfikat</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="strona-główna" className="relative bg-gradient-to-r from-teal-500 to-blue-500 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-600 mix-blend-multiply opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
              <span className="block">{slides[currentSlide].title}</span>
              <span className="block text-yellow-300">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="mt-3 text-base text-teal-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              {slides[currentSlide].description}
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900">Zamów teraz</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-yellow-300' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* About Us Section */}
      <section id="o-nas" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">O nas</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
              EnergoCert – Nowoczesne certyfikaty energetyczne dla każdego
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
              Od lat specjalizujemy się w dostarczaniu cyfrowych certyfikatów energetycznych dla domów i budynków użytkowych. Nasz zespół ekspertów zapewnia szybki, bezpieczny i łatwy proces uzyskania certyfikatu.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Bezpieczny proces',
                  description: 'Gwarantujemy bezpieczeństwo Twoich danych i płatności.',
                  icon: Shield,
                },
                {
                  name: 'Nowoczesna technologia',
                  description: 'Wykorzystujemy najnowsze rozwiązania technologiczne.',
                  icon: Cpu,
                },
                {
                  name: 'Szybkie wyniki',
                  description: 'Otrzymasz swój certyfikat w najkrótszym możliwym czasie.',
                  icon: Zap,
                },
                {
                  name: 'Profesjonalny zespół',
                  description: 'Nasi eksperci są zawsze gotowi, aby Ci pomóc.',
                  icon: UsersIcon,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="jak-to-działa" className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Jak to działa</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
              3 proste kroki
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
              {[
                { title: 'Zarejestruj się i zapłać', description: 'Opłać zamówienie online i zarejestruj swoje konto.' },
                { title: 'Wypełnij formularz', description: 'Wprowadź dane dotyczące swojego budynku. Jeśli potrzebujesz pomocy, skontaktuj się z nami!' },
                { title: 'Otrzymaj certyfikat', description: 'Odbierz certyfikat energetyczny bez wychodzenia z domu – szybko i wygodnie.' },
              ].map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center max-w-xs">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="formularze" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Formularze</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
              Wybierz formularz odpowiedni dla Twojego budynku
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
              Skorzystaj z jednego z poniższych formularzy dostosowanych do różnych typów nieruchomości. Wypełnij formularz, a my zajmiemy się resztą!
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { 
                  name: 'Mieszkanie', 
                  icon: Building2, 
                  description: 'Dla apartamentów i mieszkań w budynkach wielorodzinnych.',
                  formType: 'apartment'
                },
                { 
                  name: 'Dom', 
                  icon: Home, 
                  description: 'Dla domów jednorodzinnych i bliźniaków.',
                  formType: 'house'
                },
                { 
                  name: 'Lokal użytkowy', 
                  icon: Store, 
                  description: 'Dla biur, sklepów i innych przestrzeni komercyjnych.',
                  formType: 'commercial'
                },
                { 
                  name: 'Budynek niestandardowy', 
                  icon: Building, 
                  description: 'Dla obiektów przemysłowych, hal i innych nietypowych budynków.',
                  formType: 'atypical'
                },
              ].map((form) => (
                <Card key={form.name} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4 justify-center sm:justify-start">
                      <div className="flex-shrink-0 mr-4">
                        <form.icon className="h-8 w-8 text-teal-500" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {form.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 flex-grow text-center sm:text-left">{form.description}</p>
                    <Button 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto"
                      onClick={() => toggleForm(form.formType)}
                    >
                      {activeForm === form.formType ? 'Zwiń formularz' : 'Wypełnij formularz'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expanded Forms */}
          <div className="mt-10 space-y-10" ref={formRef}>
            {activeForm && (
              <Card className="shadow-lg">
                <CardContent className="p-6 relative">
                  <Button
                    className="absolute top-2 right-2 p-2"
                    variant="ghost"
                    onClick={() => setActiveForm(null)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  <h3 className="text-xl font-semibold mb-4">
                    {activeForm === 'house' && 'Formularz dla domu'}
                    {activeForm === 'apartment' && 'Formularz dla mieszkania'}
                    {activeForm === 'commercial' && 'Formularz dla lokalu użytkowego'}
                    {activeForm === 'atypical' && 'Formularz dla budynku niestandardowego'}
                  </h3>
                  {activeForm === 'house' && renderHouseForm()}
                  {activeForm === 'apartment' && renderApartmentForm()}
                  {activeForm === 'commercial' && renderCommercialForm()}
                  {activeForm === 'atypical' && renderAtypicalForm()}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-16 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }} />
        <div className="absolute inset-0 bg-teal-600 mix-blend-multiply opacity-70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Cennik</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Proste i transparentne ceny
            </p>
            <p className="mt-4 max-w-2xl text-lg text-teal-100 mx-auto">
              Wybierz plan, który najlepiej odpowiada Twoim potrzebom. Nasze ceny są transparentne, a płatności bezpieczne.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Certyfikat dla mieszkania', price: '499 zł', features: ['Do 100m²', 'Czas realizacji: 2 dni', 'Konsultacja online'] },
                { name: 'Certyfikat dla domu', price: '699 zł', features: ['Do 200m²', 'Czas realizacji: 3 dni', 'Konsultacja telefoniczna'] },
                { name: 'Certyfikat dla lokalu użytkowego', price: '999 zł', features: ['Do 500m²', 'Czas realizacji: 5 dni', 'Osobisty doradca'] },
              ].map((plan) => (
                <Card key={plan.name} className="hover:shadow-lg transition-shadow duration-300 bg-white bg-opacity-90">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{plan.name}</h3>
                    <p className="text-3xl font-bold text-teal-600 mb-6 text-center">{plan.price}</p>
                    <ul className="mb-6 space-y-2 flex-grow">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center justify-center sm:justify-start">
                          <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto">Wybierz pakiet</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Blog</h2>
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight">
              Odkryj świat certyfikacji
            </p>
            <p className="mt-4 max-w-2xl text-lg text-teal-100 mx-auto">
              Nasze najnowsze artykuły i porady pomogą Ci zrozumieć, jak skutecznie uzyskać certyfikat energetyczny oraz jak poprawić efektywność energetyczną swojego budynku.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Jak przygotować się do certyfikacji energetycznej?', image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
                { title: '5 sposobów na poprawę efektywności energetycznej budynku', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                { title: 'Nowe regulacje UE dotyczące certyfikatów energetycznych', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
              ].map((post) => (
                <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white text-gray-900 flex flex-col h-full">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-4 flex-grow text-center sm:text-left">
                        {post.title}
                      </h3>
                      <Button variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50 mt-auto">Przeczytaj więcej</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Kontakt</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Jesteśmy tutaj, aby Ci pomóc!
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Masz pytania dotyczące certyfikacji energetycznej? Chcesz dowiedzieć się więcej o naszych usługach? A może potrzebujesz wsparcia w procesie uzyskiwania certyfikatu? Nasz zespół ekspertów jest gotowy, aby Ci pomóc!
              </p>
              <div className="mt-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>info@energocert.pl</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center lg:justify-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+48 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                      <Label htmlFor="name">Imię</Label>
                      <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        autoComplete="given-name" 
                        required 
                        className="bg-white border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        autoComplete="email" 
                        required 
                        className="bg-white border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Temat</Label>
                      <Input 
                        type="text" 
                        name="subject"
                        id="subject" 
                        required 
                        className="bg-white border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Wiadomość</Label>
                      <Textarea 
                        name="message" 
                        id="message" 
                        rows={4} 
                        required 
                        className="bg-white border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
                      />
                    </div>
                    <div>
                      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                        Wyślij wiadomość
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              {/* Add your social media links here */}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base">
                &copy; 2023 EnergoCert. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
