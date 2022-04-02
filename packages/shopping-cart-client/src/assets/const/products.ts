export interface Product {
  id: string,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  discount?: number,
}

export const products: Product[] = [
  {
    id: '1',
    name: "BlueFire Upgraded Professional PS4 Gaming Headset",
    description: "BlueFire Upgraded Professional PS4 Gaming Headset 3.5mm Wired Bass Stereo Noise Isolation Gaming Headphone with Mic and LED L",
    price: 1900,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/BlueFire-Upgraded-Professional-PS4-Gaming-Headset.jpeg"
  },
  {
    id: '2',
    name: "Hunterspider Headset",
    description: "Package Content:1 x PS4 Gaming Headsets、1 x Splitter Cable、1 x User Manual with 7 languages",
    price: 1200,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/Hunterspider-Headset.jpeg",
    discount: 20
  },
  {
    id: '3',
    name: "Hunterspider V3 Gaming Headset",
    description: "This LED wired gaming earphone supports many kinds of devices, such as replacement for PS4, replacement for Xbox",
    price: 2400,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/Hunterspider-V3-Gaming-Headset.jpeg"
  },
  {
    id: '4',
    name: "Hunterspider V4 Gaming Headset",
    description: "This Professional Wired Gaming Headset is a primary kind of gaming headset for PlayStation 4, Xbox one and PC Games",
    price: 1000,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/Hunterspider-V4-Gaming-Headset.jpeg"
  },
  {
    id: '5',
    name: "Onikuma K16 RGB Professional Gaming Headset",
    description: "ONIKUMA K16 RGB Professional Gaming Headset Noise-Cancellation Microphone LED Stereo Headphones | Shopee Malaysia",
    price: 1600,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/Onikuma-K16-RGB-Professional-Gaming-Headset.jpeg"
  },
  {
    id: '6',
    name: "Onikuma K19 Gaming Headset",
    description: "Enhanced Immersive Gaming Experience: With high precision 40mm driver,this ps4 headset brings your vivid sound filed,shock feeling sound.",
    price: 2000,
    imageUrl: "https://dmjezjhu3we3n.cloudfront.net/Onikuma-K19-Gaming-Headset.jpg",
    discount: 50
  }
]