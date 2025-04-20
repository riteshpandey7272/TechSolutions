import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image?: string;
}

export function TestimonialCard({ quote, author, position, image }: TestimonialCardProps) {
  // Get the author's initials for the avatar fallback
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 pb-4 flex-grow">
        <QuoteIcon className="h-8 w-8 text-muted-foreground/30 mb-4" />
        <blockquote className="text-muted-foreground">
          "{quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{position}</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}