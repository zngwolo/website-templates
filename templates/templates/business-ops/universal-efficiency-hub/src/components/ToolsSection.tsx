import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link2, CheckCircle } from "lucide-react";

const ToolsSection = () => {
  const toolCategories = [
    {
      category: "CRM & Sales",
      description: "Customer relationship and sales automation",
      tools: [
        { name: "Salesforce", popular: true },
        { name: "HubSpot", popular: true },
        { name: "Pipedrive", popular: false },
        { name: "Zoho CRM", popular: false },
        { name: "Monday Sales", popular: false },
        { name: "Freshsales", popular: false }
      ],
      integrations: "Lead capture, contact sync, deal automation, email sequences"
    },
    {
      category: "Accounting & Finance",
      description: "Financial management and invoicing automation",
      tools: [
        { name: "QuickBooks", popular: true },
        { name: "Xero", popular: true },
        { name: "FreshBooks", popular: false },
        { name: "Wave Accounting", popular: false },
        { name: "Sage", popular: false },
        { name: "NetSuite", popular: false }
      ],
      integrations: "Invoice automation, expense tracking, financial reporting, payment processing"
    },
    {
      category: "Communication & Team",
      description: "Team collaboration and communication tools",
      tools: [
        { name: "Slack", popular: true },
        { name: "Microsoft Teams", popular: true },
        { name: "Discord", popular: false },
        { name: "Zoom", popular: true },
        { name: "Google Workspace", popular: true },
        { name: "Asana", popular: false }
      ],
      integrations: "Automated notifications, task updates, meeting scheduling, document sharing"
    },
    {
      category: "Project Management",
      description: "Workflow and task management automation",
      tools: [
        { name: "Asana", popular: true },
        { name: "Monday.com", popular: true },
        { name: "Trello", popular: false },
        { name: "ClickUp", popular: false },
        { name: "Notion", popular: false },
        { name: "Smartsheet", popular: false }
      ],
      integrations: "Task automation, project templates, progress tracking, team notifications"
    },
    {
      category: "Email & Marketing",
      description: "Marketing automation and email campaigns",
      tools: [
        { name: "MailChimp", popular: true },
        { name: "Constant Contact", popular: true },
        { name: "ConvertKit", popular: false },
        { name: "ActiveCampaign", popular: false },
        { name: "SendGrid", popular: false },
        { name: "Campaign Monitor", popular: false }
      ],
      integrations: "Email sequences, list segmentation, campaign automation, analytics"
    },
    {
      category: "Scheduling & Calendar",
      description: "Appointment and calendar management",
      tools: [
        { name: "Calendly", popular: true },
        { name: "Acuity Scheduling", popular: true },
        { name: "Google Calendar", popular: true },
        { name: "Outlook", popular: true },
        { name: "Bookly", popular: false },
        { name: "SimplyBook.me", popular: false }
      ],
      integrations: "Automated booking, reminder emails, calendar sync, resource management"
    }
  ];

  const customIntegrations = [
    "Point of Sale (POS) Systems",
    "Inventory Management",
    "Compliance & Reporting Tools",
    "E-commerce Platforms",
    "Social Media Management",
    "Customer Support Platforms",
    "Industry-Specific Software",
    "Legacy System Connections"
  ];

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            We Work With <span className="text-primary">Your Existing Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly integrate with the business tools you already use. No need to switch platforms -
            we make everything work together perfectly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-accent font-semibold">
            <Link2 className="w-5 h-5" />
            <span>We integrate with 100+ business tools</span>
          </div>
        </div>

        {/* Tool Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <Card key={index} className="border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  {category.category}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Popular Tools */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Popular Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant={tool.popular ? "default" : "secondary"}
                        className={tool.popular ? "bg-primary text-primary-foreground" : ""}
                      >
                        {tool.name}
                        {tool.popular && <span className="ml-1">⭐</span>}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Integration Capabilities */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Automation Features:</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {category.integrations}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Integrations */}
        <div className="bg-surface-efficiency p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Integration Capabilities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond standard integrations, we create custom connections for industry-specific tools
              and legacy systems to ensure complete operational harmony.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {customIntegrations.map((integration, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm text-foreground">{integration}</span>
              </div>
            ))}
          </div>

          {/* Integration Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Supported Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Average Integration Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Integration Uptime</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="efficiency" size="xl" className="group">
              See All Integration Options
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Don't See Your Tool Listed?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We specialize in creating custom integrations for any business tool or system.
              If you use it, we can connect it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">
                Request Custom Integration
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                View Integration Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;