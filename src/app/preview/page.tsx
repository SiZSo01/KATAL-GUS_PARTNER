"use client";

import { useEffect, useState } from "react";
import { VirtualSpace } from "@/components/VirtualSpace";
import type { SceneId } from "@/lib/scenes";

const sceneIds: SceneId[] = ["hero", "dentists", "guidance", "clinics", "technology"];

function isSceneId(value: string | null): value is SceneId {
  return value !== null && sceneIds.includes(value as SceneId);
}

function resolvePreviewScene(): SceneId {
  if (typeof window === "undefined") {
    return "hero";
  }

  const params = new URLSearchParams(window.location.search);
  const sceneParam = params.get("scene");

  if (isSceneId(sceneParam)) {
    return sceneParam;
  }

  const hash = window.location.hash.replace(/^#/, "");
  return isSceneId(hash) ? hash : "hero";
}

export default function PreviewPage() {
  const [sceneId, setSceneId] = useState<SceneId>("hero");

  useEffect(() => {
    const syncScene = () => setSceneId(resolvePreviewScene());

    syncScene();
    window.addEventListener("hashchange", syncScene);
    window.addEventListener("popstate", syncScene);

    return () => {
      window.removeEventListener("hashchange", syncScene);
      window.removeEventListener("popstate", syncScene);
    };
  }, []);

  return <VirtualSpace initialSceneId={sceneId} />;
}
