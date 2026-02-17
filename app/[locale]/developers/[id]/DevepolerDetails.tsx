'use client';

import { useTranslations } from 'next-intl';
import PageHero from '@/components/General/PageHero';
import ContactSection from '@/components/ContactSection/ContactSection';
import Overview from '@/components/Developer/Overview';
import History from '@/components/Developer/History';
import Awards from '@/components/Developer/Awards';
import ProjectsList from '@/components/Developer/ProjectsList';
import image1 from '@/app/images/hero3.avif'

export default function DevepolerDetails() {
  // const t = useTranslations('developer.Hero');

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <PageHero
        title={'Company Name'}
        subtitle={'Company Description'}
        image={image1}
        titleStyle='!text-(--color-text-secondary)'
      />

      <Overview />

      <History />

      <Awards />

      <ProjectsList status="Current" />

      <ProjectsList status="Completed" />

      <ContactSection />
    </main>
  );
}
