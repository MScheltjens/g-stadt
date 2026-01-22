import { PageHeaderSkeleton } from '@/components/ui/page-header-skeleton';
import { SectionSkeleton } from '@/components/ui/section-skeleton';

export default function Loading() {
  return (
    <>
      <PageHeaderSkeleton />
      <SectionSkeleton />
    </>
  );
}
