import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para página inicial
            </Button>
          </Link>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-primary">
                Política de Privacidade e LGPD
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardHeader>
            
            <CardContent className="prose prose-slate max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">1. Introdução</h2>
                <p className="text-foreground">
                  A Hall Assessoria está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes e usuários, 
                  em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Esta política explica como 
                  coletamos, usamos, armazenamos e protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">2. Dados Coletados</h2>
                <p className="text-foreground mb-2">Coletamos as seguintes informações quando você utiliza nossos serviços:</p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>Nome completo</li>
                  <li>Telefone com WhatsApp</li>
                  <li>Cidade e Estado</li>
                  <li>Informações sobre acidentes e sequelas</li>
                  <li>Dados sobre afastamentos e documentação médica</li>
                  <li>Ocupação atual</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">3. Finalidade do Tratamento</h2>
                <p className="text-foreground mb-2">Utilizamos seus dados pessoais para:</p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>Avaliar sua elegibilidade para o Auxílio-Acidente do INSS</li>
                  <li>Entrar em contato via WhatsApp para prestar assessoria jurídica</li>
                  <li>Preparar e acompanhar processos administrativos e judiciais</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">4. Base Legal</h2>
                <p className="text-foreground">
                  O tratamento dos seus dados pessoais é realizado com base no seu consentimento (Art. 7º, I da LGPD), 
                  que você fornece ao preencher e enviar o formulário, e para o cumprimento de obrigação legal ou 
                  regulatória (Art. 7º, II da LGPD).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">5. Compartilhamento de Dados</h2>
                <p className="text-foreground">
                  Seus dados pessoais não serão vendidos, alugados ou compartilhados com terceiros para fins comerciais. 
                  Podemos compartilhar suas informações apenas:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-foreground mt-2">
                  <li>Com o INSS e órgãos governamentais, quando necessário para processos administrativos</li>
                  <li>Com prestadores de serviços que nos auxiliam (sempre mediante contratos de confidencialidade)</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">6. Armazenamento e Segurança</h2>
                <p className="text-foreground">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, 
                  alteração, divulgação ou destruição. Seus dados são armazenados em servidores seguros e mantidos pelo tempo 
                  necessário para as finalidades descritas ou conforme exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">7. Seus Direitos</h2>
                <p className="text-foreground mb-2">De acordo com a LGPD, você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-1 text-foreground">
                  <li>Confirmar a existência de tratamento dos seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar a portabilidade dos seus dados</li>
                  <li>Revogar o consentimento</li>
                  <li>Opor-se ao tratamento realizado com base em uma das hipóteses de dispensa de consentimento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">8. Cookies</h2>
                <p className="text-foreground">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para melhorar sua experiência. 
                  Você pode gerenciar suas preferências de cookies através do banner de consentimento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">9. Alterações na Política</h2>
                <p className="text-foreground">
                  Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página 
                  regularmente para se manter informado sobre como protegemos seus dados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-3">10. Contato</h2>
                <p className="text-foreground">
                  Para exercer seus direitos, esclarecer dúvidas ou enviar solicitações relacionadas aos seus dados pessoais, 
                  entre em contato conosco:
                </p>
                <div className="mt-3 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Hall Assessoria</p>
                  <p className="text-foreground">WhatsApp: Entre em contato através do botão flutuante</p>
                  <p className="text-foreground">E-mail: contato@hallassessoria.com.br</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
