import { getAssetUrlForKind, ImageKinds, type ImageKind } from '$lib/utils';
import { cancelImageUrl } from '$lib/utils/sw-messaging';
import { type AssetResponseDto } from '@immich/sdk';

type CancelImageKind = ImageKind | 'all';

class ImageManager {
  preload(asset: AssetResponseDto | undefined, kind: ImageKind = 'preview') {
    if (!asset) {
      return;
    }

    const url = getAssetUrlForKind(asset, kind);
    if (!url) {
      return;
    }

    const img = new Image();
    img.src = url;
  }

  cancel(asset: AssetResponseDto | undefined, kind: CancelImageKind = 'preview') {
    if (!asset) {
      return;
    }

    const kinds = kind === 'all' ? (Object.keys(ImageKinds) as ImageKind[]) : [kind];
    for (const kind of kinds) {
      const url = getAssetUrlForKind(asset, kind);
      if (url) {
        cancelImageUrl(url);
      }
    }
  }

  cancelPreloadUrl(url: string | undefined) {
    if (url) {
      cancelImageUrl(url);
    }
  }
}

export const imageManager = new ImageManager();
