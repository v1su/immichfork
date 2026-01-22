FROM ghcr.io/immich-app/immich-server:release

WORKDIR /usr/src/app

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
