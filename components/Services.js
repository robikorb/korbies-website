import Image from 'next/image';

/**
 * Services section.
 *
 * Highlights the benefits and inclusions of Korbies Tech's managed IT
 * offering. Concludes with three feature cards that outline key
 * aspects such as monitoring, security and local support.
 */
export default function Services() {
  return (
    <section id="services" className="py-16 bg-dark2 text-text">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Managed IT Services</h2>
            <p className="text-muted max-w-2xl">
              At Korbies Tech, we deliver comprehensive Managed IT Services in the UK designed for small to medium businesses (SMBs). With proactive monitoring, maintenance and expert IT support, we help you stay secure, productive and focused on growing your business—while we handle the tech.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
          {/* Benefits */}
          <div className="bg-card border border-border rounded-xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="check">✔️</span> Benefits of Managed IT
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-inside list-disc text-muted text-sm pl-4">
              <li>Cost predictability: Fixed monthly fees with no surprises</li>
              <li>Improved uptime: Proactive monitoring prevents downtime</li>
              <li>Enhanced cybersecurity: Antivirus, firewall &amp; patching included</li>
              <li>Expert access: Get certified IT professionals on call</li>
              <li>Business focus: We manage IT so you can grow</li>
              <li>Scalable support: We grow as your business grows</li>
              <li>Disaster recovery: Secure backups &amp; recovery plans included</li>
            </ul>
          </div>
          {/* What's Included */}
          <div className="bg-card border border-border rounded-xl shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="box">📦</span> What's Included
            </h3>
            <ul className="space-y-2 text-muted text-sm list-inside list-disc pl-4">
              <li>
                <strong>Remote Monitoring &amp; Maintenance:</strong> 24/7 system checks,
                alerts and proactive fixes
              </li>
              <li>
                <strong>Helpdesk Support:</strong> Fast UK‑based support via phone,
                email or remote access
              </li>
              <li>
                <strong>Security Management:</strong> Endpoint protection, firewall
                rules and patching
              </li>
              <li>
                <strong>Network &amp; Device Management:</strong> Workstation, server
                and network optimisation
              </li>
              <li>
                <strong>Backup &amp; Recovery:</strong> Cloud and hybrid backups
                with DR planning
              </li>
            </ul>
          </div>
        </div>
        {/* Feature tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl shadow-soft p-6 text-center">
            <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-secondary to-card shadow-soft">
              <Image src="/icons/backup.png" alt="Proactive monitoring icon" width={40} height={40} />
            </div>
            <h4 className="font-semibold mb-2">Proactive Monitoring</h4>
            <p className="text-muted text-sm">
              Always‑on visibility into endpoints, servers and networks to
              prevent issues before they impact your business.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl shadow-soft p-6 text-center">
            <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-secondary to-card shadow-soft">
              <Image src="/icons/cybersecurity.png" alt="Security management icon" width={40} height={40} />
            </div>
            <h4 className="font-semibold mb-2">Security Management</h4>
            <p className="text-muted text-sm">
              Layered protection including AV/EDR, patching, MFA guidance and policy hardening across your fleet.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl shadow-soft p-6 text-center">
            <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-secondary to-card shadow-soft">
              <Image src="/icons/email.png" alt="Helpdesk support icon" width={40} height={40} />
            </div>
            <h4 className="font-semibold mb-2">UK Helpdesk</h4>
            <p className="text-muted text-sm">
              Friendly, fast support from a local team who understands your business and tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}