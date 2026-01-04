import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SupportPageProps {
  onNavigate: (page: string) => void;
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="w-fit mb-4"
          >
            ← Back to Home
          </Button>
          <CardTitle className="text-3xl">Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you're experiencing any issues while using Knitting & Crochet Helper,
                or if you have feature requests and suggestions to make the app even better,
                we'd love to hear from you!
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you as soon as possible:
              </p>
              <Button asChild size="lg">
                <a href="mailto:gunnar.carlson+support@gmail.com">
                  Contact Support
                </a>
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Please include details about your device, iOS version, and a description
                of the issue you're experiencing to help us assist you better.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
