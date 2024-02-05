import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTemplate } from './pages/PageTemplate'
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Certificates } from "./pages/Certificates";
import { ScrollToTop } from "components/ScroolToTop";
import { PageNotFound } from "pages/PageNotFound";
import { RecoilRoot } from "recoil";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<Home />} />
            <Route path="sobremim" element={<AboutMe />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="certificados" element={<Certificates />} />
          </Route>
  
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </RecoilRoot>    
    </BrowserRouter>
  )
}
