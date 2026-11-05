export const SIMPLE_LINK_DEMO_CODE = `'use client';
import { usePathname } from 'next/navigation';
import { SimpleLink, Text } from '@components/atoms';

export const SimpleLinkDemo = () => {
  const pathname = usePathname();

  return (
    <Text>
      Our new guide walks through everything you need to get started, from setting up your workspace to shipping
      your first project. It covers the basics first, then moves into more advanced topics like testing and
      deployment. Read the full guide <SimpleLink href={pathname}>here</SimpleLink> to follow along step by step.
    </Text>
  );
};`;
