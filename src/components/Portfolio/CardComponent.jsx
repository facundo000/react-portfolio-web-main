import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'

import { CarouselComponent } from './Carousel'

export const CardComponent = () => {
  return (
    <Card>
      <CardHeader>
      <CarouselComponent />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Lorem ipsum dolor sit</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </CardDescription>
        <Button>Buy Now</Button>
      </CardContent>
    </Card>
  )
}
