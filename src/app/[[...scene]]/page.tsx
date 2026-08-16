import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VirtualSpace } from "@/components/VirtualSpace";
import { getSceneBySlug, sceneList } from "@/lib/scenes";

type PageProps = {
  params: Promise<{ scene?: string[] }>;
};

export function generateStaticParams() {
  return sceneList.map((scene) => (scene.slug ? { scene: [scene.slug] } : {}));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scene: segments } = await params;
  const scene = getSceneBySlug(segments?.[0]);

  if (!scene || (segments?.length ?? 0) > 1) {
    return {};
  }

  return {
    title: scene.metaTitle,
    description: scene.metaDescription,
    alternates: { canonical: scene.path },
  };
}

export default async function ScenePage({ params }: PageProps) {
  const { scene: segments } = await params;
  const scene = getSceneBySlug(segments?.[0]);

  if (!scene || (segments?.length ?? 0) > 1) {
    notFound();
  }

  return <VirtualSpace initialSceneId={scene.id} />;
}

