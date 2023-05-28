const CustomLegend = ({data, colors}) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8
  }}>
    {data.map((item, index) => (
      <div key={item.name} style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        // width: 132
      }}>
        <div style={{
          minWidth: 8,
          minHeight: 8,
          borderRadius: '50%',
          marginTop: 4,
          /* purple/500 */
          background: colors[index]
        }}/>
        <div style={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 12,
          textAlign: 'start',
          lineHeight: '130%',
          /* gray/900 */
          color: '#111928'
        }}>{item.name}</div>
      </div>
    ))}
  </div>
);

export default CustomLegend;
