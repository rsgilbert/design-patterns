import { africanFactory, americanFactory, EntertainmentFactory, koreanFactory } from "./entertainment-factory";


describe('Entertainment', () => {
    let entFactory: EntertainmentFactory;

    describe('African', () => {
        beforeEach(() => {
            entFactory = africanFactory;
        })
        it('animation', () => {
            const animation = entFactory.createAnimation('Wakaima');
            expect(animation.type).toBe('African');
        });
        it('movie', () => {
            const movie = entFactory.createMovie('Beyonce');
            expect(movie.genre).toBe('African');
        });
        it('series', () => {
            const series = entFactory.createSeries('Akalya amagwa', 2);
            expect(series.sceneLocation).toBe('Africa');
        });
    });
    describe('American', () => {
        beforeEach(() => {
            entFactory = americanFactory;
        })
        it('animation', () => {
            const animation = entFactory.createAnimation('Frozen');
            expect(animation.type).toBe('American');
        });
        it('movie', () => {
            const movie = entFactory.createMovie('Fast Five');
            expect(movie.genre).toBe('American');
        });
        it('series', () => {
            const series = entFactory.createSeries('Nikita', 2);
            expect(series.sceneLocation).toBe('USA');
        });
    });
    
    describe('Korean', () => {
        beforeEach(() => {
            entFactory = koreanFactory;
        })
        it('animation', () => {
            const animation = entFactory.createAnimation('Seoul');
            expect(animation.type).toBe('Korean');
        });
        it('movie', () => {
            const movie = entFactory.createMovie('Outsiders');
            expect(movie.genre).toBe('Korean');
        });
        it('series', () => {
            const series = entFactory.createSeries('Iris', 2);
            expect(series.sceneLocation).toBe('South Korea');
        });
    });
});