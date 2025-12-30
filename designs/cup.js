Disjoint(
  Orb(80)
    .cut(Z(-35))
    .clipOpen(Z(35))
    .color('yellow')
    .set('id', 'a'),
  Arc2(15).z(38).rule(Arc2(10).z(48))
    .set('id', 'b')
    .ry(5/32)
)
