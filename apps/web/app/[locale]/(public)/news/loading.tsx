import { SectionSkeleton } from '@/components/common/section-skeleton';
import { PageHeaderSkeleton } from '@/components/common/page-header-skeleton';

export default function Loading() {
  return (
    <>
      <PageHeaderSkeleton />
      <SectionSkeleton />
    </>
  );
}
