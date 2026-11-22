export default function ReferenceFooter({ keychain = false }: { keychain?: boolean }) {
  return <footer className={`reference-footer${keychain ? ' reference-footer-keychain' : ''}`}>
    {!keychain && <strong>Photo Booth Legends</strong>}
    <p>{keychain && <span>© 2026 Photo Booth Legends · Miami-Dade · Broward · Palm Beach</span>}<span><a href="tel:9545485809">954-548-5809</a> · <a href="https://www.instagram.com/photoboothlegends/" target="_blank" rel="noreferrer">@photoboothlegends</a></span></p>
    {!keychain && <small>© 2026 Photo Booth Legends</small>}
  </footer>;
}