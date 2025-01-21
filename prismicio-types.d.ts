// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *Banners → Items*
 */
export interface BannersDocumentDataItemsItem {
  /**
   * Banner Desktop field in *Banners → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banners.items[].banner_desktop
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_desktop: prismic.ImageField<never>

  /**
   * Banner Mobile field in *Banners → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banners.items[].banner_mobile
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_mobile: prismic.ImageField<never>
}

/**
 * Content for Banners documents
 */
interface BannersDocumentData {
  /**
   * Items field in *Banners*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: banners.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<BannersDocumentDataItemsItem>>
}

/**
 * Banners document from Prismic
 *
 * - **API ID**: `banners`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BannersDocumentData>,
    'banners',
    Lang
  >

/**
 * Item in *Benefícios do açaí → Benefícios*
 */
export interface BeneficiosDoAcaiDocumentDataBeneficiosItem {
  /**
   * Título field in *Benefícios do açaí → Benefícios*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: beneficios_do_acai.beneficios[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Descrição field in *Benefícios do açaí → Benefícios*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: beneficios_do_acai.beneficios[].descricao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField
}

/**
 * Content for Benefícios do açaí documents
 */
interface BeneficiosDoAcaiDocumentData {
  /**
   * Título da seção field in *Benefícios do açaí*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: beneficios_do_acai.titulo_da_secao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo_da_secao: prismic.KeyTextField

  /**
   * Descrição da seção field in *Benefícios do açaí*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: beneficios_do_acai.descricao_da_secao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_da_secao: prismic.KeyTextField

  /**
   * Benefícios field in *Benefícios do açaí*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: beneficios_do_acai.beneficios[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  beneficios: prismic.GroupField<
    Simplify<BeneficiosDoAcaiDocumentDataBeneficiosItem>
  >
}

/**
 * Benefícios do açaí document from Prismic
 *
 * - **API ID**: `beneficios_do_acai`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BeneficiosDoAcaiDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BeneficiosDoAcaiDocumentData>,
    'beneficios_do_acai',
    Lang
  >

/**
 * Content for canal_de_denuncia documents
 */
interface CanalDeDenunciaDocumentData {
  /**
   * Conteúdo field in *canal_de_denuncia*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: canal_de_denuncia.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField

  /**
   * Mensagem de confirmação field in *canal_de_denuncia*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: canal_de_denuncia.mensagem_de_confirmacao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mensagem_de_confirmacao: prismic.RichTextField

  /**
   * Email Destinatário field in *canal_de_denuncia*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: canal_de_denuncia.email_destinatario
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_destinatario: prismic.KeyTextField

  /**
   * Banner field in *canal_de_denuncia*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: canal_de_denuncia.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>
}

/**
 * canal_de_denuncia document from Prismic
 *
 * - **API ID**: `canal_de_denuncia`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CanalDeDenunciaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CanalDeDenunciaDocumentData>,
    'canal_de_denuncia',
    Lang
  >

/**
 * Item in *Certificações → Itens*
 */
export interface CertificacoesDocumentDataItensItem {
  /**
   * Certificação field in *Certificações → Itens*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: certificacoes.itens[].certificacao
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  certificacao: prismic.ImageField<never>
}

/**
 * Content for Certificações documents
 */
interface CertificacoesDocumentData {
  /**
   * Título field in *Certificações*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: certificacoes.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Itens field in *Certificações*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: certificacoes.itens[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  itens: prismic.GroupField<Simplify<CertificacoesDocumentDataItensItem>>

  /**
   * Conteúdo field in *Certificações*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: certificacoes.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField
}

/**
 * Certificações document from Prismic
 *
 * - **API ID**: `certificacoes`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CertificacoesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CertificacoesDocumentData>,
    'certificacoes',
    Lang
  >

/**
 * Content for Compromisso Social documents
 */
interface CompromissoSocialDocumentData {
  /**
   * Título field in *Compromisso Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: compromisso_social.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Conteúdo field in *Compromisso Social*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: compromisso_social.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField
}

/**
 * Compromisso Social document from Prismic
 *
 * - **API ID**: `compromisso_social`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CompromissoSocialDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<CompromissoSocialDocumentData>,
    'compromisso_social',
    Lang
  >

/**
 * Content for Dados e Redes Sociais documents
 */
interface DadosERedesSociaisDocumentData {
  /**
   * Whatsapp field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: ex: 999999999999
   * - **API ID Path**: dados_e_redes_sociais.whatsapp
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  whatsapp: prismic.KeyTextField

  /**
   * Instagram field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: @seuinstagram
   * - **API ID Path**: dados_e_redes_sociais.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  instagram: prismic.KeyTextField

  /**
   * Linkedin field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: /seulinkedin
   * - **API ID Path**: dados_e_redes_sociais.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkedin: prismic.KeyTextField

  /**
   * Facebook field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: @seufacebook
   * - **API ID Path**: dados_e_redes_sociais.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  facebook: prismic.KeyTextField

  /**
   * Email field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dados_e_redes_sociais.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField

  /**
   * Endereço field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dados_e_redes_sociais.endereco
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  endereco: prismic.KeyTextField

  /**
   * Telefone field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Ex: (99) 99999-9999
   * - **API ID Path**: dados_e_redes_sociais.telefone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telefone: prismic.KeyTextField

  /**
   * Horário de Funcionamento field in *Dados e Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dados_e_redes_sociais.horario_de_funcionamento
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  horario_de_funcionamento: prismic.KeyTextField
}

/**
 * Dados e Redes Sociais document from Prismic
 *
 * - **API ID**: `dados_e_redes_sociais`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DadosERedesSociaisDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DadosERedesSociaisDocumentData>,
    'dados_e_redes_sociais',
    Lang
  >

/**
 * Item in *Depoimentos → Items*
 */
export interface DepoimentosDocumentDataItemsItem {
  /**
   * Imagem field in *Depoimentos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: depoimentos.items[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>

  /**
   * Descrição field in *Depoimentos → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: depoimentos.items[].descricao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField

  /**
   * Autor field in *Depoimentos → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: depoimentos.items[].autor
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  autor: prismic.KeyTextField
}

/**
 * Content for Depoimentos documents
 */
interface DepoimentosDocumentData {
  /**
   * Items field in *Depoimentos*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: depoimentos.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<DepoimentosDocumentDataItemsItem>>
}

/**
 * Depoimentos document from Prismic
 *
 * - **API ID**: `depoimentos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DepoimentosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DepoimentosDocumentData>,
    'depoimentos',
    Lang
  >

/**
 * Content for Fale Conosco documents
 */
interface FaleConoscoDocumentData {
  /**
   * Descrição field in *Fale Conosco*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fale_conosco.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao: prismic.RichTextField

  /**
   * Mapa iframe field in *Fale Conosco*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fale_conosco.mapa_iframe
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mapa_iframe: prismic.KeyTextField
}

/**
 * Fale Conosco document from Prismic
 *
 * - **API ID**: `fale_conosco`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaleConoscoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FaleConoscoDocumentData>,
    'fale_conosco',
    Lang
  >

/**
 * Item in *Faq → Items*
 */
export interface FaqDocumentDataItemsItem {
  /**
   * Pergunta field in *Faq → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].pergunta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pergunta: prismic.KeyTextField

  /**
   * Resposta field in *Faq → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].resposta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resposta: prismic.KeyTextField
}

/**
 * Content for Faq documents
 */
interface FaqDocumentData {
  /**
   * Items field in *Faq*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<FaqDocumentDataItemsItem>>
}

/**
 * Faq document from Prismic
 *
 * - **API ID**: `faq`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<FaqDocumentData>, 'faq', Lang>

/**
 * Content for Página Quem Somos documents
 */
interface PaginaQuemSomosDocumentData {
  /**
   * Título field in *Página Quem Somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pagina_quem_somos.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Conteúdo field in *Página Quem Somos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pagina_quem_somos.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField

  /**
   * Missão field in *Página Quem Somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pagina_quem_somos.missao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  missao: prismic.KeyTextField

  /**
   * Visão field in *Página Quem Somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pagina_quem_somos.visao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  visao: prismic.KeyTextField

  /**
   * Valores field in *Página Quem Somos*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pagina_quem_somos.valores
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  valores: prismic.KeyTextField
}

/**
 * Página Quem Somos document from Prismic
 *
 * - **API ID**: `pagina_quem_somos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PaginaQuemSomosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PaginaQuemSomosDocumentData>,
    'pagina_quem_somos',
    Lang
  >

/**
 * Content for Post documents
 */
interface PostDocumentData {
  /**
   * Título field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Capa field in *Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.capa
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  capa: prismic.ImageField<never>

  /**
   * Autor field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.autor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  autor: prismic.KeyTextField

  /**
   * Conteúdo field in *Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField

  /**
   * Resumo field in *Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post.resumo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resumo: prismic.KeyTextField
}

/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, 'post', Lang>

type ProdutoDocumentDataSlicesSlice = never

/**
 * Content for Produto documents
 */
interface ProdutoDocumentData {
  /**
   * Nome field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.nome
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nome: prismic.KeyTextField

  /**
   * Imagem field in *Produto*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>

  /**
   * Categoria field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.categoria
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  categoria: prismic.KeyTextField

  /**
   * Descrição field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField

  /**
   * Disponibilidade field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.disponibilidade
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  disponibilidade: prismic.KeyTextField

  /**
   * Slice Zone field in *Produto*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProdutoDocumentDataSlicesSlice> /**
   * Meta Description field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: produto.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Produto*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produto.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Produto*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: produto.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Produto document from Prismic
 *
 * - **API ID**: `produto`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProdutoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ProdutoDocumentData>, 'produto', Lang>

/**
 * Content for Quem somos documents
 */
interface QuemSomosDocumentData {
  /**
   * Banner field in *Quem somos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quem_somos.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>

  /**
   * Conteúdo field in *Quem somos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quem_somos.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField
}

/**
 * Quem somos document from Prismic
 *
 * - **API ID**: `quem_somos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuemSomosDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<QuemSomosDocumentData>,
    'quem_somos',
    Lang
  >

/**
 * Content for Seção Seja um Distribuidor documents
 */
interface SecaoSejaUmDistribuidorDocumentData {
  /**
   * Título field in *Seção Seja um Distribuidor*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: secao_seja_um_distribuidor.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Descrição field in *Seção Seja um Distribuidor*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: secao_seja_um_distribuidor.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField
}

/**
 * Seção Seja um Distribuidor document from Prismic
 *
 * - **API ID**: `secao_seja_um_distribuidor`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SecaoSejaUmDistribuidorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SecaoSejaUmDistribuidorDocumentData>,
    'secao_seja_um_distribuidor',
    Lang
  >

/**
 * Content for Serviço documents
 */
interface ServicoDocumentData {
  /**
   * Título field in *Serviço*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: servico.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Descrição field in *Serviço*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: servico.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao: prismic.RichTextField
}

/**
 * Serviço document from Prismic
 *
 * - **API ID**: `servico`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ServicoDocumentData>, 'servico', Lang>

/**
 * Content for Sustentabilidade documents
 */
interface SustentabilidadeDocumentData {
  /**
   * Título field in *Sustentabilidade*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sustentabilidade.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField

  /**
   * Conteúdo field in *Sustentabilidade*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sustentabilidade.conteudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conteudo: prismic.RichTextField
}

/**
 * Sustentabilidade document from Prismic
 *
 * - **API ID**: `sustentabilidade`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SustentabilidadeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SustentabilidadeDocumentData>,
    'sustentabilidade',
    Lang
  >

export type AllDocumentTypes =
  | BannersDocument
  | BeneficiosDoAcaiDocument
  | CanalDeDenunciaDocument
  | CertificacoesDocument
  | CompromissoSocialDocument
  | DadosERedesSociaisDocument
  | DepoimentosDocument
  | FaleConoscoDocument
  | FaqDocument
  | PaginaQuemSomosDocument
  | PostDocument
  | ProdutoDocument
  | QuemSomosDocument
  | SecaoSejaUmDistribuidorDocument
  | ServicoDocument
  | SustentabilidadeDocument

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      BannersDocument,
      BannersDocumentData,
      BannersDocumentDataItemsItem,
      BeneficiosDoAcaiDocument,
      BeneficiosDoAcaiDocumentData,
      BeneficiosDoAcaiDocumentDataBeneficiosItem,
      CanalDeDenunciaDocument,
      CanalDeDenunciaDocumentData,
      CertificacoesDocument,
      CertificacoesDocumentData,
      CertificacoesDocumentDataItensItem,
      CompromissoSocialDocument,
      CompromissoSocialDocumentData,
      DadosERedesSociaisDocument,
      DadosERedesSociaisDocumentData,
      DepoimentosDocument,
      DepoimentosDocumentData,
      DepoimentosDocumentDataItemsItem,
      FaleConoscoDocument,
      FaleConoscoDocumentData,
      FaqDocument,
      FaqDocumentData,
      FaqDocumentDataItemsItem,
      PaginaQuemSomosDocument,
      PaginaQuemSomosDocumentData,
      PostDocument,
      PostDocumentData,
      ProdutoDocument,
      ProdutoDocumentData,
      ProdutoDocumentDataSlicesSlice,
      QuemSomosDocument,
      QuemSomosDocumentData,
      SecaoSejaUmDistribuidorDocument,
      SecaoSejaUmDistribuidorDocumentData,
      ServicoDocument,
      ServicoDocumentData,
      SustentabilidadeDocument,
      SustentabilidadeDocumentData,
      AllDocumentTypes,
    }
  }
}
