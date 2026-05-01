type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}


const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section style={{display: 'flex', gap: "20px"}}>
      <aside style={{width: '30%'}}>{ sidebar}</aside>
      <main>{ children}</main>
    </section>
  )
}

export default NotesLayout;