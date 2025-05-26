import { Button } from '@/components/Button'
import styles from './index.module.css'
import Image from 'next/image'
import BudgetingIcon from '@/assets/icon-budgeting.svg'
import ApiIcon from '@/assets/icon-api.svg'
import OnboardingIcon from '@/assets/icon-onboarding.svg'
import OnlineIcon from '@/assets/icon-online.svg'
import RestaurantPicture from '@/assets/image-restaurant.jpg'
import CurrencyPicture from '@/assets/image-currency.jpg'
import PlanePicture from '@/assets/image-plane.jpg'
import ConfettiPicture from '@/assets/image-confetti.jpg'
import {
  WhyChooseCardAuthor,
  WhyChooseCardDescription,
  WhyChooseCardRoot,
  WhyChooseCardTitle,
} from '@/components/WhyChooseCard'
import {
  ArticlesCardContent,
  ArticlesCardDescription,
  ArticlesCardImage,
  ArticlesCardRoot,
  ArticlesCardTitle,
} from '@/components/ArticlesCard'
import { CarouselContainer } from '@/components/Carousel'
import { ScrollAnimationContainers } from '@/libs/motion'

export default function Home() {
  return (
    <main className={styles.main_container}>
      <section className={styles.presentation_container}>
        <div className={styles.presentation_picture} />

        <div className={styles.presentation_content}>
          <h1 className={styles.title}>Next generation digital banking</h1>
          <p className={styles.description}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <Button customClass='main_container'>Request Invite</Button>
        </div>
      </section>

      <section className={styles.why_choose_container}>
        <ScrollAnimationContainers className={styles.choose_content}>
          <h2 className={styles.title}>Why choose Easybank?</h2>
          <p className={styles.description}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </ScrollAnimationContainers>

        <CarouselContainer className={styles.choose_list}>
          <WhyChooseCardRoot>
            <Image
              src={OnlineIcon}
              alt='this icon show one hand holding cards'
            />
            <WhyChooseCardTitle>Online Banking</WhyChooseCardTitle>
            <WhyChooseCardDescription>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </WhyChooseCardDescription>
          </WhyChooseCardRoot>

          <WhyChooseCardRoot>
            <Image
              src={BudgetingIcon}
              alt='this icon show one phone with symbol of the dollar'
            />
            <WhyChooseCardTitle>Simple Budgeting</WhyChooseCardTitle>
            <WhyChooseCardDescription>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </WhyChooseCardDescription>
          </WhyChooseCardRoot>

          <WhyChooseCardRoot>
            <Image
              src={OnboardingIcon}
              alt='this icon show three people two showing on top gear and one person pointing with arm to gear'
            />
            <WhyChooseCardTitle>Fast Onboarding</WhyChooseCardTitle>
            <WhyChooseCardDescription>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </WhyChooseCardDescription>
          </WhyChooseCardRoot>

          <WhyChooseCardRoot>
            <Image
              src={ApiIcon}
              alt='this icon show chip with brain in the your center'
            />
            <WhyChooseCardTitle>Open API</WhyChooseCardTitle>
            <WhyChooseCardDescription>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </WhyChooseCardDescription>
          </WhyChooseCardRoot>
        </CarouselContainer>
      </section>

      <section className={styles.last_articles_container}>
        <h2 className={styles.title}>Latest Articles</h2>

        <CarouselContainer className={styles.last_articles_content}>
          <ArticlesCardRoot>
            <ArticlesCardImage
              src={CurrencyPicture}
              alt='this picture show money paper different country'
            />
            <ArticlesCardContent>
              <WhyChooseCardAuthor>By Claire Robinson</WhyChooseCardAuthor>
              <ArticlesCardTitle>
                Receive money in any currency with no fees
              </ArticlesCardTitle>
              <ArticlesCardDescription>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </ArticlesCardDescription>
            </ArticlesCardContent>
          </ArticlesCardRoot>

          <ArticlesCardRoot>
            <ArticlesCardImage
              src={RestaurantPicture}
              alt='this picture show peoples sit down an table full of the food'
            />
            <ArticlesCardContent>
              <WhyChooseCardAuthor>By Wilson Hutton</WhyChooseCardAuthor>
              <ArticlesCardTitle>
                Treat yourself without worrying about money
              </ArticlesCardTitle>
              <ArticlesCardDescription>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </ArticlesCardDescription>
            </ArticlesCardContent>
          </ArticlesCardRoot>

          <ArticlesCardRoot>
            <ArticlesCardImage
              src={PlanePicture}
              alt='this picture show wing from plane with sunset to background'
            />
            <ArticlesCardContent>
              <WhyChooseCardAuthor>By Wilson Hutton</WhyChooseCardAuthor>
              <ArticlesCardTitle>
                Take your Easybank card wherever you go
              </ArticlesCardTitle>
              <ArticlesCardDescription>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </ArticlesCardDescription>
            </ArticlesCardContent>
          </ArticlesCardRoot>

          <ArticlesCardRoot>
            <ArticlesCardImage
              src={ConfettiPicture}
              alt='this picture show many confectionery of the many colors with cyan background'
            />
            <ArticlesCardContent>
              <WhyChooseCardAuthor>By Claire Robinson</WhyChooseCardAuthor>
              <ArticlesCardTitle>
                Our invite-only Beta accounts are now live!
              </ArticlesCardTitle>
              <ArticlesCardDescription>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </ArticlesCardDescription>
            </ArticlesCardContent>
          </ArticlesCardRoot>
        </CarouselContainer>
      </section>
    </main>
  )
}
