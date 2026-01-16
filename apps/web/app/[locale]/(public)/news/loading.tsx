import { PageHeaderSkeleton } from '@/components/common/page-header-skeleton';
import { SectionSkeleton } from '@/components/common/section-skeleton';

export default function Loading() {
  return (
    <>
      <PageHeaderSkeleton />
      <SectionSkeleton />
    </>
  );
}
