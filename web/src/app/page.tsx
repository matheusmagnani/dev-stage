import { ArrowRight, Copy } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';

export default function Home() {
  return (
    <main>
      <Button>
        Label
        <ArrowRight/>
      </Button>

      <IconButton>
         <Copy/>
      </IconButton>

    </main>
  );
}
