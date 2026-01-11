import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <Card className="max-w-4xl w-full">
        <CardHeader>
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="w-fit mb-4"
          >
            ← Back to Home
          </Button>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <p className="text-sm text-muted-foreground">Effective Date: January 10, 2026</p>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy describes how Knitting Helper ("we," "us," or "our") collects, uses, and discloses your personal information when you use our mobile application (the "Service").
              </p>
              <p className="text-muted-foreground">
                We are committed to protecting your personal information and your right to privacy. When you visit our mobile application and use our products, you trust us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
              </p>
              <p className="text-muted-foreground">
                This Privacy Policy applies to all information collected through our mobile application, as well as any related services, sales, marketing, or events.
              </p>
              <p className="text-muted-foreground">
                Please read this Privacy Policy carefully as it will help you understand what we do with the information we collect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Definitions</h2>
              <p className="text-muted-foreground mb-2">
                To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, they are strictly defined as:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Cookie:</strong> a small file placed on your device to enable certain features and functionality.</li>
                <li><strong>Company:</strong> when this policy mentions "Company," "we," "us," or "our," it refers to Knitting Helper.</li>
                <li><strong>Country:</strong> where Knitting Helper or the owners/founders of Knitting Helper are based, in this case United States.</li>
                <li><strong>Customer:</strong> refers to the company, organization, or person that signs up to use the Knitting Helper Service.</li>
                <li><strong>Device:</strong> any internet-connected device such as a phone, tablet, computer, or any other device that can be used to visit Knitting Helper and use the services.</li>
                <li><strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
                <li><strong>Service:</strong> refers to the mobile application provided by Knitting Helper as described in the relative terms and on this platform.</li>
                <li><strong>Third-party service:</strong> refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
                <li><strong>Website:</strong> Knitting Helper's site, which can be accessed via https://myst1024.github.io/knitting-helper-website/#.</li>
                <li><strong>You:</strong> a person or entity that is registered with Knitting Helper to use the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">
                Knitting Helper uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To fulfill any other purpose for which you provide it</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
                <li>In any other way we may describe when you provide the information</li>
                <li>For any other purpose with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Legal Basis for Processing Personal Data Under GDPR</h2>
              <p className="text-muted-foreground mb-2">
                If you are from the European Economic Area (EEA), Knitting Helper legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
              </p>
              <p className="text-muted-foreground mb-2">
                Knitting Helper may process your Personal Data because:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>We need to perform a contract with you</li>
                <li>You have given us permission to do so</li>
                <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
                <li>To comply with the law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Retention of Your Personal Data</h2>
              <p className="text-muted-foreground">
                Knitting Helper will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="text-muted-foreground">
                Knitting Helper will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
              </p>
              <h3 className="text-lg font-semibold mb-2 mt-4">6.1 Data Retention for Physical Goods</h3>
              <p className="text-muted-foreground">
                For orders involving physical goods, we retain your shipping and billing information, including your name, address, and contact details, as necessary to fulfill your order, process returns, manage warranty claims, and comply with tax, legal, and regulatory obligations. This information may be retained for a longer period than other personal data to ensure proper delivery of goods and to handle any post-purchase issues that may arise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Transfer of Your Personal Data</h2>
              <p className="text-muted-foreground">
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
              <p className="text-muted-foreground">
                If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
              </p>
              <p className="text-muted-foreground">
                Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
              <p className="text-muted-foreground">
                Knitting Helper will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Disclosure of Your Personal Data</h2>
              <h3 className="text-lg font-semibold mb-2">Business Transactions:</h3>
              <p className="text-muted-foreground">
                If Knitting Helper is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              <h3 className="text-lg font-semibold mb-2 mt-3">Disclosure for Law Enforcement:</h3>
              <p className="text-muted-foreground">
                Under certain circumstances, Knitting Helper may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
              <h3 className="text-lg font-semibold mb-2 mt-3">Legal Requirements:</h3>
              <p className="text-muted-foreground mb-2">
                Knitting Helper may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of Knitting Helper</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Security of Your Personal Data</h2>
              <p className="text-muted-foreground">
                The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our servers.
              </p>
              <p className="text-muted-foreground">
                If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Your Data Protection Rights</h2>
              <p className="text-muted-foreground">
                Depending on your location and applicable laws, you may have certain rights regarding your personal information, including rights to access, correct, delete, or restrict use of your information. We honor these rights regardless of your location and are committed to providing reasonable access to the information that you have shared with us.
              </p>
              <h3 className="text-lg font-semibold mb-2 mt-4">12.1 General Data Access & Deletion Rights</h3>
              <p className="text-muted-foreground mb-2">
                Regardless of your location, you can make the following requests regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Access Your Data:</strong> You can request a copy of the personal information we have about you. We will provide this information in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Delete Your Data:</strong> You can request that we delete your personal information from our systems. We will comply with this request unless there is a legal requirement for us to keep certain information.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                To submit a data access or deletion request, please contact us using the contact information provided at the end of this Privacy Policy. We will respond to your request within 30 days. We may need to verify your identity before processing your request.
              </p>
              <h3 className="text-lg font-semibold mb-2 mt-4">12.3 CCPA Privacy Rights (California Residents)</h3>
              <p className="text-muted-foreground mb-2">
                If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>What personal information we have about you.</strong> If you make this request, we will return to you:
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>The categories of personal information we have collected about you</li>
                    <li>The categories of sources from which we collect your personal information</li>
                    <li>The business or commercial purpose for collecting or selling your personal information</li>
                    <li>The categories of third parties with whom we share personal information</li>
                    <li>The specific pieces of personal information we have collected about you</li>
                    <li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to</li>
                    <li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with</li>
                  </ul>
                </li>
                <li><strong>To delete your personal information.</strong> If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.</li>
                <li><strong>To stop selling your personal information.</strong> We don't sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some state laws, sharing your data through certain targeted advertisements may be considered a "sale" of information. You are the only owner of your Personal Data and can request disclosure or deletion at any time.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We will respond to verified requests within 45 days as required by the CCPA. If we need more time, we will inform you of the reason and extension period in writing.
              </p>
              <p className="text-muted-foreground">
                Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.
              </p>
              <p className="text-muted-foreground mt-3">
                Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Service Providers</h2>
              <p className="text-muted-foreground">
                We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
              </p>
              <p className="text-muted-foreground">
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">14. Links to Other Sites</h2>
              <p className="text-muted-foreground">
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
              <p className="text-muted-foreground">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">15. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-muted-foreground">
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">16. Contact Us</h2>
              <p className="text-muted-foreground mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>By visiting this page on our website: <a href="https://myst1024.github.io/knitting-helper-website/#support" className="text-blue-400 hover:underline">https://myst1024.github.io/knitting-helper-website/#support</a></li>
              </ul>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
