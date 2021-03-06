import React from 'react'
import { Descriptions } from 'antd'
import AccountIcon from '../AccountIcon'

import Link from 'next/link'
import animalHash from 'angry-purple-tiger'
import { Balance, CurrencyType } from '@helium/currency'

const TransferHotspotV1 = ({ txn }) => {
  const amountToSellerObject = new Balance(
    txn.amountToSeller.integerBalance,
    CurrencyType.networkToken,
  )
  const feeObject = new Balance(txn.fee.integerBalance, CurrencyType.dataCredit)

  return (
    <>
      <Descriptions bordered>
        <Descriptions.Item label="Hotspot" span={3}>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Link href={`/hotspots/${txn.gateway}`}>
              <a>{animalHash(txn.gateway)}</a>
            </Link>
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Seller" span={3}>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <AccountIcon address={txn.seller} style={{ marginRight: 8 }} />
            <Link href={`/accounts/${txn.seller}`}>
              <a>{txn.seller}</a>
            </Link>
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Buyer" span={3}>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <AccountIcon address={txn.buyer} style={{ marginRight: 8 }} />
            <Link href={`/accounts/${txn.buyer}`}>
              <a>{txn.buyer}</a>
            </Link>
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Payment to Seller" span={3}>
          {amountToSellerObject.toString(2)}
        </Descriptions.Item>
        <Descriptions.Item label="Fee" span={3}>
          {feeObject.toString()}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default TransferHotspotV1
