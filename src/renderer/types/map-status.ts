const MapStatuses = Object.freeze({
  REMAINING: 'remaining' as const,
  PICKED: 'picked' as const,
  BANNED: 'banned' as const,
});

type MapStatus = EnumLiteralsOf<typeof MapStatuses>;

export { MapStatus, MapStatuses };
