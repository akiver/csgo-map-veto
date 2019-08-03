const MapStatuses = Object.freeze({
  REMAINING: 'remaining' as 'remaining',
  PICKED: 'picked' as 'picked',
  BANNED: 'banned' as 'banned',
})

type MapStatus = EnumLiteralsOf<typeof MapStatuses>

export { MapStatus, MapStatuses }
