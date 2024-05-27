import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Arkadiusz Toruń"
            body={
                <>
                    <p>
                        <strong>
                            "Nie tylko wysocy potrafią widzieć horyzonty"
                        </strong>
                        <br />
                        Nazywam Arek i jestem magistrem Inżynierii Biomedycznej.
                    </p>
                    <p>
                        <i>Biomedical Engineer</i>
                    </p>
                    <h3>Zainteresowania</h3>
                    <article>
                        <p>
                            Bardzo lubię muzykę, prawie cały czas mi towarzyszy. Uwielbiam pływać,
                            grać w piłkę nożną ( a nawet jestem trenerem), ogólnie sport i sporty nie tylko drużynowe.
                            Potrafię obsługiwać się z bronią pneumatyczną.
                        </p>
                    </article>
                    <article>
                        <p>
                            Bardzo <b>chciałbym</b> ukończyć ten kurs. Gdy to przeczytam za jakiś czas to
                            mam nadzieję, że przyjdę tu z myślą o swoim <i>
                                Homepage on recrutation
                            </i>.
                            <b>[edit:] ukończyłem kurs i aktywnie rekrutuje 😄 </b>
                        </p>
                    </article>
                    <article>
                        <p>
                            <span>Krótko o pracy magisterskiej</span> <br/>
                                Tematem mojej pracy była : "Analiza możliwości wykorzystania uczenia maszynowego w procesach diagnowania
                                stanu organizmu człowieka na podstawie wyglądu tęczówek oczu"
                        </p>
                    </article>
                </>
            }
        />
    </Container>
);