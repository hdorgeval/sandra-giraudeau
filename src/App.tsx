import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { Aculifting } from './pages/Aculifting';
import { AculiftingDetails } from './pages/AculiftingDetails';
import { Acupuncture } from './pages/Acupuncture';
import { ContactFormError } from './pages/ContactFormError';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { EnergetiqueTraditionnelleChinoise } from './pages/EnergetiqueTraditionnelleChinoise';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MassageCouple } from './pages/MassageCouple';
import { MassageEveilDesSens } from './pages/MassageEveilDesSens';
import { MassageEveilDesSensQuatreMains } from './pages/MassageEveilDesSensQuatreMains';
import { MassageEveilDivin } from './pages/MassageEveilDivin';
import { MassageTantrique } from './pages/MassageTantrique';
import { MassageTuina } from './pages/MassageTuina';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { SoinsDouleurMedecineChinoise } from './pages/SoinsDouleurMedecineChinoise';
import { SoinsOncologieMedecineChinoise } from './pages/SoinsOncologieMedecineChinoise';
import { SoinsUroGenitaleMedecineChinoise } from './pages/SoinsUroGenitaleMedecineChinoise';
import { Temoignages } from './pages/Temoignages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact/success',
    element: <ContactFormSuccessfullySent />,
  },
  {
    path: '/contact/error',
    element: <ContactFormError />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
  },
  {
    path: '/energetique-traditionnelle-chinoise',
    element: <EnergetiqueTraditionnelleChinoise />,
  },
  {
    path: '/soins-douleur-medecine-chinoise',
    element: <SoinsDouleurMedecineChinoise />,
  },
  {
    path: '/soins-urogenitale-medecine-chinoise',
    element: <SoinsUroGenitaleMedecineChinoise />,
  },
  {
    path: '/soins-oncologie-medecine-chinoise',
    element: <SoinsOncologieMedecineChinoise />,
  },
  {
    path: '/aculifting',
    element: <Aculifting />,
  },
  {
    path: '/aculifting-en-details',
    element: <AculiftingDetails />,
  },
  {
    path: '/acupuncture',
    element: <Acupuncture />,
  },
  {
    path: '/massage-tuina',
    element: <MassageTuina />,
  },
  {
    path: '/massage-eveil-des-sens',
    element: <MassageEveilDesSens />,
  },
  {
    path: '/massage-eveil-des-sens-quatre-mains',
    element: <MassageEveilDesSensQuatreMains />,
  },
  {
    path: '/massage-couple',
    element: <MassageCouple />,
  },
  {
    path: '/massage-eveil-divin',
    element: <MassageEveilDivin />,
  },
  {
    path: '/massage-tantrique',
    element: <MassageTantrique />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
