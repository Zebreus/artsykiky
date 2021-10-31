import  styles  from "../styles/boxmodel.module.scss"
import  Head from 'next/head'

function boxmodel () {
    return <div>
                <Head>
                    <title>CSS Box Model</title>
                </Head>
                    <div className={styles.wrapper}>
                        <h1>CSS Box Model</h1>
                        <ol>
                            <li><p>legt CSS Spezifikationen fest</p></li>
                            <li><p>Größe HTML-Element basierend auf CSS-Angaben</p></li>
                            <li><p>Block-Elemente (4 Angaben spielen bei Berechnung eine Rolle)</p></li>
                        </ol>
                        <p><span>Inhalt (mit width & height)</span><span>Innenabstand (padding)</span><span>Rahmen (border)</span><span>Außenabstand (margin)</span></p>

                        <h2>Inhalt mit width & heigth</h2>
                        <ol>
                            <li><p>Block-Element - gesamte Breite (zur Verfügung)</p></li>
                            <li><p>mit width & height explizite Größenangaben möglich</p></li>
                            <li><p>- Box wird in angegebene Richtung begrenzt</p></li>
                            <li><p>- bnötigt Inhalt mehr Platz = Box wächst in andere Richtung</p></li>
                        </ol>
                        <p><span>ohne width</span></p>
                        <p><span>mit width</span></p>
                        <p><span>ohne height</span></p>
                        <p><span>mit height</span></p>
                        <p><span>mit width, zu viel Ihnhalt</span></p>

                        <h2>Innenabstand</h2>
                        <ol>
                            <li><p>Innenabstand - für jede Seite individuell festlegbar</p></li>
                            <li><p>padding-top; padding-bottom; padding-left; padding-right</p></li>
                        </ol>
                        <p><span>padding:10px - Innenabstand auf allen Seiten</span></p>
                        <p><span>padding:10px 20px - oben & unten 10px; rechts & links 20px</span></p>
                        <p><span>padding:10px 20px 30px - oben 10px; links & rechts 20px; unten 30px</span></p>
                        <p><span>padding:10px 20px 30px 40px - oben 10px; rechts 20px; unten 30px; links 40px (Uhrzeigersinn)</span></p>
                        <ol>
                            <li><p>Innenabstände zur Größenangabe hinzuaddiert</p></li>
                            <li><p>- width:300px & padding:10px = 320px breit</p></li>
                        </ol>

                        <h2>Rahmen</h2>
                        <ol>
                            <li><p>wird ebenfalls zur Größenangabe hinzuaddiert</p></li>
                            <li><p>mehrere CSS-Eigenschaften um Rahmenlinie zu definieren</p></li>
                        </ol>
                        <p><span>border-style: zB. none, <span>solid</span>, <span>double</span>, <span>dashed</span>, <span>dotted</span></span></p>
                        <p><span>border-color: Farbe</span></p>
                        <p><span>border-width: dicke</span></p>
                        <p><span>border: 3px, solid, black (kombiniert)</span></p>
                        <ol>
                            <li><p>mit Zusätzen -top, -bottom, -left, -right - jede Seite separat</p></li>
                        </ol>

                        <h2>Außenabstand</h2>
                        <ol>
                            <li><p>margin - Abstand Elemente nach Außen</p></li>
                            <li><p>margin-top; margin-bottom; margin-left; margin-right</p></li>
                        </ol>
                        <p><span>margin:10px - Außenabstand auf allen Seiten</span></p>
                        <p><span>margin:10px 20px - oben & unten 10px; rechts & links 20px</span></p>
                        <p><span>margin:10px 20px 30px - oben 10px; links & rechts 20px; unten 30px</span></p>
                        <p><span>margin:10px 20px 30px 40px - oben 10px; rechts 20px; unten 30px; links 40px (Uhrzeigersinn)</span></p>
                        <ol>
                            <li><p>Besonderheit: 2 Elemente mit vertikalen Außenabständen treffen aufeinander</p></li>
                            <li><p>2 Boxen nebeneinander - Außenabstände addieren sich</p></li>
                        </ol>
                        <p><span>Box1 - margin-right:10px</span><span>Box2 - margin-left:10px</span><span>margin insgesamt 20px</span></p>
                        <ol>
                            <li><p>anders, wenn Boxen übereinander stehen - kleinerer Wert entfällt</p></li>
                        </ol>
                        <p><span>Box1 - margin-bottom:10px</span></p>
                        <p><span>Box2 - margin-top:20px</span></p>
                        <p><span>margin insgesamt 20px</span></p>
                        <ol>
                            <li><p>CSS-Eigenschaften - sorgen dafür, dass vertikale Abstände nicht kolabieren</p></li>
                            <li><p>- absolut positionierte Elemente (position:absolute, overflow, float oder position:absolute oder display:inline-block</p></li>
                        </ol>
                        
                        <h2>Box Model anpassen</h2>
                        <ol>
                            <li><p>Größe des Inhalts, Innenabstand, Rahmen, Außenabstand addieren (Größenverhältnisse)</p></li>    
                            <li><span>Viewport ohne Problem</span></li>
                        </ol>
                        <p><span>25% des Viewports</span><span>75% des Viewports</span></p>
                        <ol>
                            <li><p>Viewport mit Problemen</p></li>
                            <li><p>Nun 10px Rahmenlinie rechts einfügen</p></li>
                        </ol>
                        <p><span>25% des Viewports mit 10px Rahmenlinie</span><span>75% des Viewports</span></p>
                        <ol>
                            <li><p>border wird zu den 25% dazu addiert</p></li>
                            <li><p>die 75% haben nicht mehr genügend Platz und wandern nach unten</p></li>
                            <li><p>deshalb wurde box-sizing:border-box eingeführt</p></li>
                            <li><p>Innenabstände & Rahmenlinien werden von 25% abgezogen</p></li>
                        </ol>
                        <p><span>25% des Viewports mit 10px Rahmenlinie abgezogen</span><span>75% des Viewports</span></p>
                        
                        <h2>Box Model von Inline-Elementen</h2>
                        <ol>
                            <li><p>Inline-Elemente hoch & breit wie Inhalt</p></li>
                            <li><p>width & heigt machen keinen Sinn</p></li>
                            <li><p>können trotzdem mit Innen- & Außenabständen versehen werden</p></li>
                            <li><p>margin - rechts & links normal; oben & unten keine Wirkung</p></li>
                            <li><p>vertikale Abstände mit line-height</p></li>
                            <li><p>oder Elemente mit display:inline-block umwandeln</p></li>
                        </ol>
                        <p><span>Inline-Element mit line-height</span></p>
                        <p><span>Inline-Element mit display:inline-block</span></p>

                        <h2>Überfließende Inhalte steuern</h2>
                        <ol>
                            <li><p>Normalfall: Element wächt mit Ihnalt mit</p></li>
                            <li><p>Verhalten mit CSS ändern zB. wenn width oder height definiert und mehr Inhalt als in Box passt</p></li>
                            <li><p>overflow legt fest, wie Browser damit umgeht</p></li>
                        </ol>
                        <p><span>overflow:visible</span></p>
                        <p><span>overflow:hidden</span></p>
                        <p><span>overflow:scroll</span></p>
                        <p><span>overflow:auto</span></p>
                        <p><span>overflow:inherit</span></p>

                    </div>

    </div>

}

export default boxmodel