import { AfricanAnimation, Animation, AmericanAnimation, KoreanAnimation } from "./animation";
import { AfricanMovie, Movie, AmericanMovie, KoreanMovie } from "./movie";
import { AfricanSeries, Series, AmericanSeries, KoreanSeries } from "./series";

export interface EntertainmentFactory {
    createAnimation(name: string) : Animation;
    createMovie(name: string): Movie;
    createSeries(name: string, seasons: number): Series;
}

class AfricanFactory implements EntertainmentFactory {
    createAnimation(name) {
        return new AfricanAnimation(name);
    }
    createMovie(name) {
        return new AfricanMovie(name);
    }
    createSeries(name, seasons) {
        return new AfricanSeries(name, seasons);
    }
}

class AmericanFactory implements EntertainmentFactory {
    createAnimation(name) {
        return new AmericanAnimation(name);
    }
    createMovie(name) {
        return new AmericanMovie(name);
    }
    createSeries(name, seasons) {
        return new AmericanSeries(name, seasons);
    }
}

class KoreanFactory implements EntertainmentFactory {
    createAnimation(name) {
        return new KoreanAnimation(name);
    }
    createMovie(name) {
        return new KoreanMovie(name);
    }
    createSeries(name, seasons) {
        return new KoreanSeries(name, seasons);
    }
}

export const africanFactory = new AfricanFactory();
export const americanFactory = new AmericanFactory();
export const koreanFactory = new KoreanFactory();