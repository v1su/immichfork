FROM ghcr.io/immich-app/immich-server:release

ENV IMMICH_PORT=3001
EXPOSE 3001

CMD ["node", "dist/main"]
